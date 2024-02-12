import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import EditIcon from '@mui/icons-material/Edit'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import Loading from '~/components/loading/Loading'
import { ScreenPath } from '~/global/enum'
import { ICategoryDetails } from '~/global/interfaces/categoriesInterface'
import { notifyError } from '~/global/toastify'
import useCategoriesApi from '~/hooks/api/useCategoriesApi'
import { ButtonWrapper, InformationContainer, TitleText, Wrapper } from '../addCategory/AddCategory.styled'
import { ContentWrapper, DetailThumbnailContainer, Image, Text } from './ViewCategoryDetail.styled'

const ViewCategoryDetail = () => {
  const navigate = useNavigate()
  const params = useParams()
  const { getCategoryById } = useCategoriesApi()
  const [categoryData, setCategoryData] = useState<ICategoryDetails>()
  const [isLoading, setIsLoading] = useState(false)
  const categoryId = params.categoryId

  useEffect(() => {
    if (categoryId) {
      getCategoryDetail(categoryId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getCategoryDetail = async (categoryId: string) => {
    setIsLoading(true)
    try {
      const categoryData = await getCategoryById(categoryId)
      setCategoryData(categoryData)
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    } finally {
      setIsLoading(false)
    }
  }
  const handleBackButton = () => {
    navigate(ScreenPath.CATEGORIES)
  }
  const handleEditButton = () => {
    navigate(`${ScreenPath.CATEGORIES}/update/${categoryId}`)
  }
  return isLoading ? (
    <Loading />
  ) : (
    <>
      <ButtonWrapper>
        <SecondaryButton
          variant='contained'
          name='Trở về'
          color='var(--gray-light-color)'
          icon={<ArrowBackIcon />}
          onClick={handleBackButton}
          type='button'
        />
        <PrimaryButton
          name='Chỉnh sửa'
          type='button'
          variant='contained'
          icon={<EditIcon />}
          onClick={handleEditButton}
        />
      </ButtonWrapper>
      <Wrapper>
        <DetailThumbnailContainer>
          <TitleText>Hình ảnh</TitleText>
          <Image src={categoryData?.image} alt={categoryData?.name} />
        </DetailThumbnailContainer>
        <InformationContainer>
          <TitleText>Thông tin chung</TitleText>
          <ContentWrapper>
            <Text>
              <strong>Tên phân loại: </strong>
              {categoryData?.name}
            </Text>
            <Text>
              <strong>Mô tả: </strong>
              {categoryData?.description}
            </Text>
            <Text>
              <strong>Ngày tạo: </strong>
              {dayjs(categoryData?.createdAt).format('hh:mm DD/MM/YYYY')}
            </Text>
            <Text>
              <strong>Ngày cập nhật: </strong>
              {dayjs(categoryData?.updatedAt).format('hh:mm DD/MM/YYYY')}
            </Text>
          </ContentWrapper>
        </InformationContainer>
      </Wrapper>
    </>
  )
}

export default ViewCategoryDetail

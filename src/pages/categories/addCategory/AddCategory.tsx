import { yupResolver } from '@hookform/resolvers/yup'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FileUpload from 'react-material-file-upload'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import InputTextForm from '~/components/form/InputTextForm'
import { EMPTY } from '~/global/constants'
import { ScreenPath } from '~/global/enum'
import { ICategoriesProps } from '~/global/interfaces/interface'
import { addCategoryValidationSchema } from '../validation/AddCategoryValidationSchema'
import { ButtonWrapper, InformationContainer, ThumnailContainer, TitleText, Wrapper } from './AddCategory.styled'
const AddCategory = () => {
  const navigate = useNavigate()
  const [files, setFiles] = useState<File[]>([])

  const defaultValues: ICategoriesProps = {
    image: EMPTY,
    name: EMPTY,
    description: EMPTY
  }
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ICategoriesProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(addCategoryValidationSchema)
  })

  const handleAddCategoryButton = () => {
    console.log('Added')
  }
  const handleCancelButton = () => {
    navigate(ScreenPath.CATEGORIES)
  }
  return (
    <form onSubmit={handleSubmit(handleAddCategoryButton)}>
      <ButtonWrapper>
        <SecondaryButton
          variant='contained'
          name='Hủy'
          color='var(--gray-light-color)'
          icon={<CloseIcon />}
          onClick={handleCancelButton}
          type='button'
        />
        <PrimaryButton name='Thêm phân loại' type='submit' variant='contained' icon={<AddIcon />} />
      </ButtonWrapper>
      <Wrapper>
        <ThumnailContainer>
          <TitleText>Hình ảnh</TitleText>
          <FileUpload
            sx={{
              width: '300px',
              height: '180px',
              border: '1px dashed',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              '.MuiButtonBase-root': {
                color: 'var(--primary-color)',
                backgroundColor: 'var(--primary-light-color)',
                '&:hover': {
                  color: 'var(--white-color)',
                  backgroundColor: 'var(--primary-color)'
                }
              },
              '.MuiButtonBase-root.MuiChip-root': {
                backgroundColor: 'white',
                '&:hover': {
                  color: 'var(--gray-color)'
                }
              },
              '.MuiButtonBase-root.MuiChip-root .MuiChip-icon': {
                color: 'var(--primary-color)'
              }
            }}
            value={files}
            onChange={setFiles}
            maxFiles={1}
            maxSize={1024 * 1024 * 8}
            accept='image/png, image/jpeg'
            title={`Kéo thả ảnh vào đây hoặc bấm thêm ảnh`}
          />
        </ThumnailContainer>
        <InformationContainer>
          <TitleText>Thông tin chung</TitleText>
          <InputTextForm
            control={control}
            name='name'
            label='Tên phân loại'
            sx={{ width: '90%', marginLeft: ' 20px' }}
            variant='outlined'
            error={errors.name?.message}
          />
          <InputTextForm
            control={control}
            name='description'
            label='Mô tả'
            sx={{ width: '90%', margin: '20px 0 0 20px' }}
            variant='outlined'
            error={errors.description?.message}
            multiline
            rows={5}
          />
        </InformationContainer>
      </Wrapper>
    </form>
  )
}

export default AddCategory
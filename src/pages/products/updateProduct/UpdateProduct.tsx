/* eslint-disable react-hooks/exhaustive-deps */
import { yupResolver } from '@hookform/resolvers/yup'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import Loading from '~/components/loading/Loading'
import { EMPTY } from '~/global/constants/constants'
import { ScreenPath } from '~/global/enum'
import { ICheckboxOption, IProductsProps } from '~/global/interfaces/interface'
import { notifyError } from '~/global/toastify'
import useCategoriesApi from '~/hooks/api/useCategoriesApi'

import useCloudinaryApi from '~/hooks/api/useCloudinaryApi'
import { ButtonWrapper, GeneralContainer, Wrapper } from './UpdateProduct.styled'
import GeneralInformationSection from '../components/GeneralInformationSection'
import FileUploadSection from '../components/FileUploadSection'
import CategoriesSection from '../components/CategoriesSection'
import VariantsSection from '../components/VariantsSection'
import { updateProductValidationSchema } from '../validation/UpdateProductValidationSchema'
import { Edit } from '@mui/icons-material'
import { ONE, TWO, ZERO } from '~/global/constants/numbers'
import useProductsApi from '~/hooks/api/useProductsApi'
import { ICategory } from '~/global/interfaces/categoriesInterface'
import { IVariant } from '~/global/interfaces/productInterface'

const UpdateProduct = () => {
  const navigate = useNavigate()
  const params = useParams()
  const [files, setFiles] = useState<File[]>([])
  const [productData, setProductData] = useState<IProductsProps>()
  const [isLoading, setIsLoading] = useState(false)
  const [keyValueCounts, setKeyValueCounts] = useState<Record<number, number>>({})
  const [showVariantFields, setShowVariantFields] = useState(false)

  const [categoriesList, setCategoriesList] = useState<ICheckboxOption[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const { getAllCategories } = useCategoriesApi()
  const { uploadCloudinary } = useCloudinaryApi()
  const { updateProduct, getProductById } = useProductsApi()

  const productId = params.productId

  const defaultValues = {
    image: EMPTY,
    name: EMPTY,
    description: EMPTY
  }
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IProductsProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(updateProductValidationSchema)
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'variants'
  })

  const handleAddKeyButton = (index: number) => {
    const currentCount = keyValueCounts[index] || ZERO
    if (currentCount < TWO) {
      setKeyValueCounts({
        ...keyValueCounts,
        [index]: currentCount + ONE
      })
    }
  }

  const handleAddVariantsButton = () => {
    if (!showVariantFields) {
      setShowVariantFields(true)
    } else if (fields.length < TWO) {
      append({
        sku: EMPTY,
        price: ZERO,
        quantity: ZERO,
        dimensions: {
          height: ZERO,
          width: ZERO,
          length: ZERO
        },
        keyValue: {}
      })
    }
  }

  //#region (Category fetch)
  const handleCategoriesSelect = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories)
  }
  useEffect(() => {
    getCategoriesData()
  }, [])
  const getCategoriesData = async () => {
    try {
      const categoriesData = await getAllCategories()
      const categoriesList: ICheckboxOption[] = categoriesData.map((value: { name: unknown; _id: unknown }) => {
        return {
          label: value.name,
          value: value._id
        }
      })
      setCategoriesList(categoriesList)
    } catch (error) {
      console.error()
    }
  }
  //#endregion

  useEffect(() => {
    if (productId) {
      getProductDetail(productId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getProductDetail = async (productId: string) => {
    setIsLoading(true)
    try {
      const product = await getProductById(productId)
      setProductData(product)
      setSelectedCategories(product.categories.map((value: ICategory) => value._id))
      if (product.variants.length) {
        setShowVariantFields(true)
        setKeyValueCounts({
          0: 1,
          1: 1
        })
      }
      reset({
        name: product.name,
        brand: product.brand,
        description: product.description,
        variants: product.variants,
        categories: product.categories.map((value: ICategory) => value._id)
      })
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    } finally {
      setIsLoading(false)
    }
  }

  const uploadImage = async (publicId: string) => {
    try {
      await uploadCloudinary(files, [publicId])
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    }
  }

  const handleUpdateProductButton = async () => {}

  const handleCancelButton = () => {
    navigate(ScreenPath.PRODUCTS)
  }

  return isLoading ? (
    <Loading />
  ) : (
    <form onSubmit={handleSubmit(handleUpdateProductButton)}>
      <ButtonWrapper>
        <SecondaryButton
          variant='contained'
          name='Hủy'
          color='var(--gray-light-color)'
          icon={<CloseIcon />}
          onClick={handleCancelButton}
          type='button'
        />
        <PrimaryButton name='Cập nhật' type='submit' variant='contained' icon={<Edit />} />
      </ButtonWrapper>
      <Wrapper>
        <GeneralContainer>
          <GeneralInformationSection control={control} errors={errors} />
          <FileUploadSection files={files} setFiles={setFiles} />
          <VariantsSection
            control={control}
            errors={errors}
            fields={fields}
            handleAddKeyButton={handleAddKeyButton}
            handleAddVariantsButton={handleAddVariantsButton}
            keyValueCounts={keyValueCounts}
            showVariantFields={showVariantFields}
          />
        </GeneralContainer>
        <CategoriesSection
          categoriesOptions={categoriesList}
          control={control}
          onCategoriesSelect={handleCategoriesSelect}
        />
      </Wrapper>
    </form>
  )
}

export default UpdateProduct

import { yupResolver } from '@hookform/resolvers/yup'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import { EMPTY } from '~/global/constants/constants'
import { ONE, TWO, ZERO } from '~/global/constants/numbers'
import { ScreenPath } from '~/global/enum'
import { ICheckboxOption, IProductsProps } from '~/global/interfaces/interface'
import CategoriesSection from '../components/CategoriesSection'
import FileUploadSection from '../components/FileUploadSection'
import GeneralInformationSection from '../components/GeneralInformationSection'
import VariantsSection from '../components/VariantsSection'
import { addProductValidationSchema } from '../validation/AddProductValidationSchema'
import { ButtonWrapper, GeneralContainer, Wrapper } from './AddProduct.styled'
import useProductsApi from '~/hooks/api/useProductsApi'
import useCloudinaryApi from '~/hooks/api/useCloudinaryApi'
import { notifyError, notifySuccess } from '~/global/toastify'
import { cloudinaryURLConvert } from '~/utils/common.utils'
import useCategoriesApi from '~/hooks/api/useCategoriesApi'
import { v4 } from 'uuid'

const AddProduct = () => {
  const navigate = useNavigate()
  const [files, setFiles] = useState<File[]>([])
  const [showVariantFields, setShowVariantFields] = useState(false)
  const [keyValueCounts, setKeyValueCounts] = useState<Record<number, number>>({})
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const { uploadCloudinary } = useCloudinaryApi()
  const { createProduct } = useProductsApi()
  const { getAllCategories } = useCategoriesApi()
  const [categoriesList, setCategoriesList] = useState<ICheckboxOption[]>([])

  const defaultValues: IProductsProps = {
    name: EMPTY,
    description: EMPTY,
    images: [],
    brand: EMPTY,
    variants: [
      {
        sku: EMPTY,
        price: ZERO,
        quantity: ZERO,
        dimensions: {
          height: ZERO,
          width: ZERO,
          length: ZERO
        },
        keyValue: {}
      }
    ],
    categories: []
  }

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IProductsProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(addProductValidationSchema)
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'variants'
  })

  useEffect(() => {
    getCategoriesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleCategoriesSelect = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories)
  }

  const uploadImage = async (publidIds: string[]) => {
    try {
      await uploadCloudinary(files, publidIds)
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    }
  }

  const handleAddProductButton = async (data: IProductsProps) => {
    const updatedVariants = data.variants.map(
      (variant: { keyValue: { [s: string]: unknown } | ArrayLike<unknown> }) => {
        const transformedKeyValue: Record<string, unknown> = {}
        if (variant.keyValue && Object.keys(variant.keyValue).length > ZERO) {
          Object.entries(variant.keyValue).forEach(([key, value]) => {
            transformedKeyValue[key] = value
          })
        }
        return {
          ...variant,
          keyValue: transformedKeyValue
        }
      }
    )
    if (files.length <= 0) {
      notifyError('Cần ít nhất một ảnh')
      return
    } else {
      const imageList: string[] = []
      const imageURL: string[] = []
      for (let i = 0; i < files.length; i++) {
        const publicId = v4()
        imageList.push(publicId)
        imageURL.push(cloudinaryURLConvert(publicId))
      }

      const formData: IProductsProps = {
        ...data,
        categories: selectedCategories,
        variants: updatedVariants,
        images: imageURL
      }
      const response = await createProduct(formData)
      if (response) {
        await uploadImage(imageList)
        reset()
        setFiles([])
        setSelectedCategories([])
        notifySuccess('Thêm thành công')
      }
    }
  }

  const handleCancelButton = () => {
    navigate(ScreenPath.PRODUCTS)
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

  const handleAddKeyButton = (index: number) => {
    const currentCount = keyValueCounts[index] || ZERO
    if (currentCount < TWO) {
      setKeyValueCounts({
        ...keyValueCounts,
        [index]: currentCount + ONE
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(handleAddProductButton)}>
      <ButtonWrapper>
        <SecondaryButton
          variant='contained'
          name='Hủy'
          color='var(--gray-light-color)'
          icon={<CloseIcon />}
          onClick={handleCancelButton}
          type='button'
        />
        <PrimaryButton name='Thêm sản phẩm' type='submit' variant='contained' icon={<AddIcon />} />
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

export default AddProduct

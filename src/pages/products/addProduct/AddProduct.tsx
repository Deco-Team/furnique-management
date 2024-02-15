import { yupResolver } from '@hookform/resolvers/yup'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import PrimaryButton from '~/components/button/PrimaryButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import { EMPTY } from '~/global/constants/constants'
import { ONE, TWO, ZERO } from '~/global/constants/numbers'
import { ScreenPath } from '~/global/enum'
import { IAddProductProps, ICheckboxOption, IProductsProps } from '~/global/interfaces/interface'
import { notifyError, notifySuccess } from '~/global/toastify'
import useCategoriesApi from '~/hooks/api/useCategoriesApi'
import useCloudinaryApi from '~/hooks/api/useCloudinaryApi'
import useProductsApi from '~/hooks/api/useProductsApi'
import { cloudinaryURLConvert } from '~/utils/common.utils'
import CategoriesSection from '../components/CategoriesSection'
import FileUploadSection from '../components/FileUploadSection'
import GeneralInformationSection from '../components/GeneralInformationSection'
import VariantsSection from '../components/VariantsSection'
import { addProductValidationSchema } from '../validation/AddProductValidationSchema'
import { ButtonWrapper, GeneralContainer, Wrapper } from './AddProduct.styled'

const AddProduct = () => {
  const navigate = useNavigate()
  const [files, setFiles] = useState<File[]>([])
  const [keyValueCounts, setKeyValueCounts] = useState<Record<number, number>>({ 0: 1 })
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const { uploadCloudinary } = useCloudinaryApi()
  const { createProduct } = useProductsApi()
  const { getAllCategoriesForCreateProduct } = useCategoriesApi()
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
    formState: { errors },
    clearErrors
  } = useForm<IProductsProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(addProductValidationSchema)
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variants'
  })

  useEffect(() => {
    getCategoriesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getCategoriesData = async () => {
    try {
      const categoriesData = await getAllCategoriesForCreateProduct()
      const categoriesList: ICheckboxOption[] = categoriesData.map((value: { name: unknown; _id: unknown }) => {
        return {
          label: value.name,
          value: value._id
        }
      })
      setCategoriesList(categoriesList)
    } catch (error) {
      console.log(error)
    }
  }

  const handleCategoriesSelect = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories)
    if (selectedCategories.length > 0) {
      clearErrors('categories')
    }
  }

  const uploadImage = async (publidIds: string[]) => {
    try {
      await uploadCloudinary(files, publidIds)
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    }
  }

  const handleAddProductButton = async (data: IAddProductProps) => {
    if (selectedCategories.length === 0) {
      notifyError('Vui lòng chọn ít nhất 1 danh mục cho sản phẩm')
      return
    }
    const updatedVariants = data.variants.map(
      (variant: { keyValue: { [s: string]: unknown } | ArrayLike<unknown> }) => {
        const transformedKeyValue: Record<string, unknown> = {}
        if (variant.keyValue) {
          Object.values(variant.keyValue).forEach((entry) => {
            if (typeof entry === 'object' && entry !== null && 'key' in entry && 'value' in entry) {
              transformedKeyValue[entry.key as string] = entry.value
            }
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

      try {
        const response = await createProduct(formData)
        if (response) {
          await uploadImage(imageList)
          reset()
          setFiles([])
          setSelectedCategories([])
          notifySuccess('Thêm thành công')
          navigate(ScreenPath.PRODUCTS)
        }
      } catch (error) {
        notifyError('Có lỗi xảy ra khi thêm sản phẩm')
      }
    }
  }

  const handleCancelButton = () => {
    navigate(ScreenPath.PRODUCTS)
  }

  const handleAddVariantsButton = () => {
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
    setKeyValueCounts({
      ...keyValueCounts,
      [fields.length]: 1
    })
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

  const handleRemoveKeyButton = (variantIndex: number) => {
    setKeyValueCounts((prevKeyValueCounts) => {
      const newKeyValueCounts = { ...prevKeyValueCounts }
      if (newKeyValueCounts[variantIndex] > 1) {
        newKeyValueCounts[variantIndex] -= 1
      } else {
        delete newKeyValueCounts[variantIndex]
      }
      return newKeyValueCounts
    })
  }

  const handleRemoveVariantButton = (index: number) => {
    remove(index)
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
            handleRemoveKeyButton={handleRemoveKeyButton}
            handleRemoveVariantButton={handleRemoveVariantButton}
          />
        </GeneralContainer>
        <CategoriesSection
          categoriesOptions={categoriesList}
          control={control}
          onCategoriesSelect={handleCategoriesSelect}
          errors={errors}
        />
      </Wrapper>
    </form>
  )
}

export default AddProduct

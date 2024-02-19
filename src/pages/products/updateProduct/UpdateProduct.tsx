/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import { ButtonWrapper, GeneralContainer, Image, Items, Wrapper } from './UpdateProduct.styled'
import GeneralInformationSection from '../components/GeneralInformationSection'
import FileUploadSection from '../components/FileUploadSection'
import CategoriesSection from '../components/CategoriesSection'
import VariantsSection from '../components/VariantsSection'
import { updateProductValidationSchema } from '../validation/UpdateProductValidationSchema'
import { Edit } from '@mui/icons-material'
import { ONE, TWO, ZERO } from '~/global/constants/numbers'
import useProductsApi from '~/hooks/api/useProductsApi'
import { ICategory } from '~/global/interfaces/categoriesInterface'
import { Button, ImageList, ImageListItem } from '@mui/material'

const UpdateProduct = () => {
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
        keyValue: new Map()
      }
    ],
    categories: []
  }

  const navigate = useNavigate()
  const params = useParams()
  const [files, setFiles] = useState<File[]>([])
  const [productData, setProductData] = useState<IProductsProps>(defaultValues)
  const [isLoading, setIsLoading] = useState(false)
  const [keyValueCounts, setKeyValueCounts] = useState<Record<number, number>>({})
  const [showVariantFields, setShowVariantFields] = useState(false)

  const [categoriesList, setCategoriesList] = useState<ICheckboxOption[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])

  const [imageLimit, setImageLimit] = useState(0)

  const { getAllCategoriesForCreateProduct } = useCategoriesApi()
  const { uploadCloudinary } = useCloudinaryApi()
  const { updateProduct, getProductById } = useProductsApi()

  const productId = params.productId

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<IProductsProps>({
    defaultValues: defaultValues
    // resolver: yupResolver(updateProductValidationSchema)
  })

  console.log(errors)

  const { fields, append, remove } = useFieldArray({
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
        keyValue: new Map()
      })
    }
  }

  //#region (Category fetch)
  const handleCategoriesSelect = (selectedCategories: string[]) => {
    setSelectedCategories(selectedCategories)
    setProductData({
      ...productData,
      categories: selectedCategories
    })
  }

  useEffect(() => {
    getCategoriesData()
  }, [])
  const getCategoriesData = async () => {
    try {
      const categoriesData = await getAllCategoriesForCreateProduct()
      const categoriesList: ICheckboxOption[] = categoriesData.docs.map((value: { name: unknown; _id: unknown }) => {
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
  //#endregion

  useEffect(() => {
    if (productId) {
      getProductDetail(productId)
    }
  }, [])

  const getProductDetail = async (productId: string) => {
    setIsLoading(true)
    try {
      const product = await getProductById(productId)
      setProductData(product)
      setSelectedCategories(product.categories.map((value: ICategory) => value._id))
      reset({
        name: product.name,
        brand: product.brand,
        description: product.description,
        variants: product.variants,
        categories: selectedCategories,
        images: product.images
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

  const handleUpdateProductButton = () => {
    const updateProductdata: IProductsProps = {
      name: control._formValues.name,
      brand: control._formValues.brand,
      categories: productData.categories,
      description: control._formValues.description,
      images: productData.images,
      variants: control._formValues.variants
    }
    console.log(control._formValues)
    console.log(productData)
  }

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
          <FileUploadSection maxFiles={5 - productData.images.length} files={files} setFiles={setFiles} />
          <ImageList cols={5}>
            {productData?.images.map((value: string, i: number) => (
              <ImageListItem key={i}>
                <Items>
                  <Image src={value} />
                  <Button
                    sx={{
                      my: 2
                    }}
                    size='small'
                    color='error'
                    variant='contained'
                    onClick={() => {
                      setProductData({
                        ...productData,
                        images: productData?.images.filter((img) => img !== value)
                      })
                    }}
                  >
                    Xóa ảnh
                  </Button>
                </Items>
              </ImageListItem>
            ))}
          </ImageList>
          <VariantsSection
            control={control}
            errors={errors}
            fields={fields}
            handleAddKeyButton={handleAddKeyButton}
            handleAddVariantsButton={handleAddVariantsButton}
            keyValueCounts={keyValueCounts}
            handleRemoveKeyButton={handleRemoveKeyButton}
            handleRemoveVariantButton={handleRemoveVariantButton}
            defaultValues={productData?.variants}
          />
        </GeneralContainer>
        <CategoriesSection
          categoriesOptions={categoriesList}
          control={control}
          onCategoriesSelect={handleCategoriesSelect}
          errors={errors}
          defaultValues={selectedCategories}
        />
      </Wrapper>
    </form>
  )
}

export default UpdateProduct

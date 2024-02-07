import { yupResolver } from '@hookform/resolvers/yup'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import { EMPTY } from '~/global/constants/constants'
import { ONE, TWO, ZERO } from '~/global/constants/numbers'
import { ScreenPath } from '~/global/enum'
import { IProductsProps } from '~/global/interfaces/interface'
import CategoriesSection from '../components/CategoriesSection'
import FileUploadSection from '../components/FileUploadSection'
import GeneralInformationSection from '../components/GeneralInformationSection'
import VariantsSection from '../components/VariantsSection'
import { addProductValidationSchema } from '../validation/AddProductValidationSchema'
import { ButtonWrapper, GeneralContainer, Wrapper } from './AddProduct.styled'

const AddProduct = () => {
  const navigate = useNavigate()
  const [files, setFiles] = useState<File[]>([])
  const [showVariantFields, setShowVariantFields] = useState(false)
  const [keyValueCounts, setKeyValueCounts] = useState<Record<number, number>>({})
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
    categories: EMPTY
  }

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IProductsProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(addProductValidationSchema)
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'variants'
  })

  const handleAddProductButton = (data: IProductsProps) => {
    const updatedVariants = data.variants.map((variant) => {
      if (variant.keyValue && Object.keys(variant.keyValue).length > ZERO) {
        const keyValuePairs = Object.entries(variant.keyValue).map(([key, value]) => ({
          key: key,
          value: value
        }))
        return {
          ...variant,
          keyValue: keyValuePairs
        }
      }
      return variant
    })
    const formData = {
      ...data,
      variants: updatedVariants
    }
    console.log(formData)
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
        <CategoriesSection control={control} />
      </Wrapper>
    </form>
  )
}

export default AddProduct

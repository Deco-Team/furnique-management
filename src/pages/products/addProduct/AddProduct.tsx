// AddProduct.tsx

import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import FileUpload from 'react-material-file-upload'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import InputDropdownForm from '~/components/form/InputDropdownForm'
import InputTextForm from '~/components/form/InputTextForm'
import { EMPTY } from '~/global/constants/constants'
import { ZERO } from '~/global/constants/numbers'
import { IProductsProps } from '~/global/interfaces/interface'
import { categoriesOptions } from '~/mocks/categoriesOptions'
import { addProductValidationSchema } from '../validation/AddProductValidationSchema'
import {
  ButtonWrapper,
  CategoryContainer,
  GeneralContainer,
  InformationContainer,
  TitleText,
  Wrapper
} from './AddProduct.styled'
import { yupResolver } from '@hookform/resolvers/yup'
import { ScreenPath } from '~/global/enum'

const AddProduct = () => {
  const navigate = useNavigate()
  const [files, setFiles] = useState<File[]>([])
  const [showVariantFields, setShowVariantFields] = useState(false)

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
    setValue,
    formState: { errors }
  } = useForm<IProductsProps>({
    defaultValues: defaultValues,
    resolver: yupResolver(addProductValidationSchema)
  })

  const { fields, append } = useFieldArray({
    control,
    name: 'variants'
  })

  const handleAddProductButton = () => {
    console.log('Added')
  }

  const handleCancelButton = () => {
    navigate(ScreenPath.PRODUCTS)
  }

  const handleAddVariantsButton = () => {
    if (!showVariantFields) {
      setShowVariantFields(true)
    } else if (fields.length < 2) {
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
          <InformationContainer>
            <TitleText>Hình ảnh</TitleText>
            <FileUpload
              sx={{
                width: '88%',
                height: '180px',
                border: '1px dashed',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: '20px',
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
              buttonText='Tải lên'
            />
          </InformationContainer>
          <InformationContainer>
            <TitleText>Phân loại</TitleText>
            {showVariantFields &&
              fields.map((_variant, index) => {
                return (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <InputTextForm
                      control={control}
                      name={`variants[${index}].sku`}
                      label={`SKU ${index + 1}`}
                      sx={{ width: '30%', margin: '20px 0 0 20px' }}
                      variant='outlined'
                      error={errors.variants?.[index]?.sku?.message}
                    />
                    <InputTextForm
                      control={control}
                      name={`variants[${index}].price`}
                      label={`Price ${index + 1}`}
                      sx={{ width: '30%', margin: '20px 0 0 20px' }}
                      variant='outlined'
                      error={errors.variants?.[index]?.price?.message}
                    />
                    <InputTextForm
                      control={control}
                      name={`variants[${index}].quantity`}
                      label={`Quantity ${index + 1}`}
                      sx={{ width: '30%', margin: '20px 0 0 20px' }}
                      variant='outlined'
                      type='number'
                      error={errors.variants?.[index]?.quantity?.message}
                    />
                    <InputTextForm
                      control={control}
                      name={`variants[${index}].dimensions.height`}
                      label={`Height ${index + 1}`}
                      sx={{ width: '30%', margin: '20px 0 0 20px' }}
                      variant='outlined'
                      error={errors.variants?.[index]?.dimensions?.height?.message}
                    />
                    <InputTextForm
                      control={control}
                      name={`variants[${index}].dimensions.width`}
                      label={`Width ${index + 1}`}
                      sx={{ width: '30%', margin: '20px 0 0 20px' }}
                      variant='outlined'
                      error={errors.variants?.[index]?.dimensions?.width?.message}
                    />
                    <InputTextForm
                      control={control}
                      name={`variants[${index}].dimensions.length`}
                      label={`Length ${index + 1}`}
                      sx={{ width: '30%', margin: '20px 0 0 20px' }}
                      variant='outlined'
                      error={errors.variants?.[index]?.dimensions?.length?.message}
                    />

                    {/* <h4>KeyValue</h4>
                    {Object.entries(defaultValues.variants[index].keyValue).map(([key, value], kvIndex) => (
                      <div key={kvIndex}>
                        <InputTextForm
                          name={`variants[${index}].keyValue.${key}`}
                          label={key}
                          control={control}
                          variant={'outlined'}
                        />
                      </div>
                    ))}
                    <PrimaryButton variant={'outlined'} name={'Thêm giá trị'} type={'button'} /> */}
                  </div>
                )
              })}
            {fields.length < 2 && (
              <PrimaryButton
                variant={'outlined'}
                name={'Thêm phân loại'}
                type={'button'}
                onClick={handleAddVariantsButton}
              />
            )}
          </InformationContainer>
        </GeneralContainer>
        <CategoryContainer>
          <TitleText>Danh mục</TitleText>
          <InputDropdownForm
            control={control}
            name='categories'
            options={categoriesOptions}
            variant='outlined'
            label='Phân loại sản phẩm'
          />
        </CategoryContainer>
      </Wrapper>
    </form>
  )
}

export default AddProduct

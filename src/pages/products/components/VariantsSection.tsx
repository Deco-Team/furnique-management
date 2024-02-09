import { Control, FieldArrayWithId, FieldErrors } from 'react-hook-form'
import PrimaryButton from '~/components/button/PrimaryButton'
import InputTextForm from '~/components/form/InputTextForm'
import { ONE, ZERO } from '~/global/constants/numbers'
import { IProductsProps } from '~/global/interfaces/interface'
import { InformationContainer, TitleText } from '../addProduct/AddProduct.styled'

interface VariantsSectionProps {
  keyValueCounts: Record<number, number>
  control: Control<IProductsProps>
  errors: FieldErrors<IProductsProps>
  fields: FieldArrayWithId<IProductsProps, 'variants', 'id'>[]
  showVariantFields: boolean
  handleAddKeyButton: (index: number) => void
  handleAddVariantsButton: () => void
}

const VariantsSection = ({
  keyValueCounts,
  control,
  errors,
  fields,
  showVariantFields,
  handleAddKeyButton,
  handleAddVariantsButton
}: VariantsSectionProps) => {
  return (
    <>
      <InformationContainer>
        <TitleText>Phân loại</TitleText>
        {showVariantFields &&
          fields.map((_variant, index) => {
            const keyValueCount = keyValueCounts[index] || ZERO
            return (
              <>
                <h4 style={{ paddingLeft: '20px', margin: ZERO }}>Phân loại {index + ONE}</h4>
                <div key={index} style={{ marginBottom: '20px' }}>
                  <InputTextForm
                    control={control}
                    name={`variants[${index}].sku`}
                    label={`SKU ${index + ONE}`}
                    sx={{ width: '30%', margin: '20px 0 0 20px' }}
                    variant='outlined'
                    error={errors.variants?.[index]?.sku?.message}
                  />
                  <InputTextForm
                    control={control}
                    name={`variants[${index}].price`}
                    label={`Giá ${index + ONE}`}
                    sx={{ width: '30%', margin: '20px 0 0 20px' }}
                    variant='outlined'
                    error={errors.variants?.[index]?.price?.message}
                  />
                  <InputTextForm
                    control={control}
                    name={`variants[${index}].quantity`}
                    label={`Số lượng ${index + ONE}`}
                    sx={{ width: '30%', margin: '20px 0 0 20px' }}
                    variant='outlined'
                    error={errors.variants?.[index]?.quantity?.message}
                  />
                  <InputTextForm
                    control={control}
                    name={`variants[${index}].dimensions.height`}
                    label={`Chiều cao ${index + ONE}`}
                    sx={{ width: '30%', margin: '20px 0 0 20px' }}
                    variant='outlined'
                    error={errors.variants?.[index]?.dimensions?.height?.message}
                  />
                  <InputTextForm
                    control={control}
                    name={`variants[${index}].dimensions.width`}
                    label={`Chiều rộng ${index + ONE}`}
                    sx={{ width: '30%', margin: '20px 0 0 20px' }}
                    variant='outlined'
                    error={errors.variants?.[index]?.dimensions?.width?.message}
                  />
                  <InputTextForm
                    control={control}
                    name={`variants[${index}].dimensions.length`}
                    label={`Chiều dài ${index + ONE}`}
                    sx={{ width: '30%', margin: '20px 0 0 20px' }}
                    variant='outlined'
                    error={errors.variants?.[index]?.dimensions?.length?.message}
                  />
                  {keyValueCount < 2 && (
                    <PrimaryButton
                      variant='outlined'
                      name='Thêm thuộc tính'
                      type='button'
                      onClick={() => handleAddKeyButton(index)}
                    />
                  )}
                  {Array.from({ length: keyValueCount }).map((_, i) => (
                    <div key={i}>
                      <InputTextForm
                        control={control}
                        name={`variants[${index}].keyValue[${i}].key`}
                        label={`Thuộc tính ${i + ONE}`}
                        sx={{ width: '45%', margin: '10px 0 0 20px' }}
                        variant='outlined'
                      />
                      <InputTextForm
                        control={control}
                        name={`variants[${index}].keyValue[${i}].value`}
                        label='Giá trị'
                        variant={'outlined'}
                        sx={{ width: '45%', margin: '10px 0 0 20px' }}
                      />
                    </div>
                  ))}
                </div>
              </>
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
    </>
  )
}

export default VariantsSection

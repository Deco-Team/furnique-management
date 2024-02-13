import { Control } from 'react-hook-form'
import InputCheckboxForm from '~/components/form/InputCheckboxForm'
import { ICheckboxOption, IProductsProps } from '~/global/interfaces/interface'
import { CategoryContainer, TitleText } from '../addProduct/AddProduct.styled'

interface CategoriesSectionProps {
  control: Control<IProductsProps>
  onCategoriesSelect: (selectedCategories: string[]) => void
  categoriesOptions: ICheckboxOption[]
}

const CategoriesSection = ({ control, onCategoriesSelect, categoriesOptions }: CategoriesSectionProps) => {
  const handleCategoriesSelect = (selectedCategories: string[]) => {
    onCategoriesSelect(selectedCategories)
  }

  return (
    <>
      <CategoryContainer>
        <TitleText>Danh mục</TitleText>
        <InputCheckboxForm
          control={control}
          name='categories'
          options={categoriesOptions}
          label='Phân loại sản phẩm'
          onSelectionChange={handleCategoriesSelect}
        />
      </CategoryContainer>
    </>
  )
}

export default CategoriesSection

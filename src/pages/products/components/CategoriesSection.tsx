import { Control } from 'react-hook-form'
import InputCheckboxForm from '~/components/form/InputCheckboxForm'
import { IProductsProps } from '~/global/interfaces/interface'
import { categoriesOptions } from '~/mocks/categoriesOptions'
import { CategoryContainer, TitleText } from '../addProduct/AddProduct.styled'

interface CategoriesSectionProps {
  control: Control<IProductsProps>
}

const CategoriesSection = ({ control }: CategoriesSectionProps) => {
  return (
    <>
      <CategoryContainer>
        <TitleText>Danh mục</TitleText>
        <InputCheckboxForm control={control} name='categories' options={categoriesOptions} label='Phân loại sản phẩm' />
      </CategoryContainer>
    </>
  )
}

export default CategoriesSection

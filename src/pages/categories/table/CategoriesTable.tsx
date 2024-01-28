import CommonTable from '~/components/table/CommonTable'
import { categoriesRows } from '~/mocks/categoriesData'
import { categoriesColumn } from './Coloumn'

const CategoriesTable = () => {
  return (
    <>
      <CommonTable columns={categoriesColumn} rows={categoriesRows} />
    </>
  )
}

export default CategoriesTable

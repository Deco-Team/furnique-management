import CommonTable from '~/components/table/CommonTable'
import { categoriesColumn } from './Coloumn'
import { categoriesRows } from '~/mocks/categoriesData'

const CategoriesTable = () => {
  return (
    <>
      <CommonTable columns={categoriesColumn} rows={categoriesRows} />
    </>
  )
}

export default CategoriesTable

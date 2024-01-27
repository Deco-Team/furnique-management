import CommonTable from '~/components/table/CommonTable'
import { productsColumn } from './Column'
import { productsRow } from '~/mocks/productsData'

const ProductsTable = () => {
  return <CommonTable columns={productsColumn} rows={productsRow} />
}

export default ProductsTable

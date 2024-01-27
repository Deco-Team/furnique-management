import CommonTable from '~/components/table/CommonTable'
import { ordersColumn } from './Column'
import { ordersRows } from '~/mocks/ordersData'

const OrdersTable = () => {
  return <CommonTable columns={ordersColumn} rows={ordersRows} />
}

export default OrdersTable

import { useEffect, useState } from 'react'
import Loading from '~/components/loading/Loading'
import CommonTable from '~/components/table/CommonTable'
import { IOrder, IOrdersRows } from '~/global/interfaces/ordersInterface'
import useOrdersApi from '~/hooks/api/useOrdersApi'
import { ordersColumn } from './Column'
import dayjs from 'dayjs'

const OrdersTable = () => {
  const { getAllOrders } = useOrdersApi()
  const [isLoading, setIsLoading] = useState(false)
  const [ordersRows, setOrdersRows] = useState<IOrdersRows[]>([])
  useEffect(() => {
    getOrdersData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getOrdersData = async () => {
    try {
      setIsLoading(true)
      const ordersData = await getAllOrders()
      const ordersRows = ordersData.map((order: IOrder) => ({
        ...order,
        id: order._id,
        orderDate: dayjs(order.orderDate).format('DD/MM/YYYY'),
        customer: `${order.customer.firstName} ${order.customer.lastName}`
      }))
      setOrdersRows(ordersRows)
    } catch (error) {
      console.error()
    } finally {
      setIsLoading(false)
    }
  }
  return <>{isLoading ? <Loading /> : <CommonTable columns={ordersColumn} rows={ordersRows} />}</>
}

export default OrdersTable

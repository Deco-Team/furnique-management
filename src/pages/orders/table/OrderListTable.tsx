import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '~/components/loading/Loading'
import CommonTable from '~/components/table/CommonTable'
import { IOrder, IOrderListRows } from '~/global/interfaces/ordersInterface'
import useOrdersApi from '~/hooks/api/useOrdersApi'
import { orderListColumns } from './OrderColumn'
import dayjs from 'dayjs'

const OrderListTable = () => {
  const { getOrderById } = useOrdersApi()
  const params = useParams()
  const orderId = params.orderId
  const [isLoading, setIsLoading] = useState(false)
  const [orderListRows, setOrderListRows] = useState<IOrderListRows[]>([])
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const [totalRows, setTotalRows] = useState(0)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
  }

  useEffect(() => {
    if (orderId) {
      getOrderListData(orderId, page, pageSize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize])
  const getOrderListData = async (orderId: string, page: number, pageSize: number) => {
    try {
      setIsLoading(true)
      const ordersData = (await getOrderById(orderId, page, pageSize)) as IOrder
      const mappedData = ordersData.items.map((item, index) => {
        const variant = item.product.variants.find((variant) => variant.sku === item.sku)
        if (!variant) {
          throw new Error(`Không tìm thấy phân loại cho SKU ${item.sku}`)
        }
        let keyValueString = ''
        if (variant.keyValue) {
          keyValueString = Object.values(variant.keyValue).join(', ')
        }
        return {
          ...item,
          id: index + 1,
          products: item.product.name,
          sku: item.sku,
          quantity: item.quantity,
          price: variant.price,
          totalAmount: item.quantity * variant.price,
          image: item.product.images,
          variant: keyValueString,
          orderDate: dayjs(ordersData.orderDate).format('hh:mm:ss DD/MM/YYYY')
        }
      })
      setOrderListRows(mappedData)
      setTotalRows(ordersData.totalDocs)
    } catch (error) {
      console.error()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CommonTable
          columns={orderListColumns}
          rows={orderListRows}
          totalRows={totalRows}
          page={page}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          onPageSizeChange={handlePageSizeChange}
        />
      )}
    </>
  )
}

export default OrderListTable

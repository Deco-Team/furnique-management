import { useCallback } from 'react'
import { ICancelOrderProps } from '~/global/interfaces/ordersInterface'
import { notifyLoading } from '~/global/toastify'
import useApi from './useApi'
import { StaffRoles } from '~/global/enum'

const useOrdersApi = () => {
  const callApi = useApi()
  const rootEndpoint = 'orders/provider'

  const getAllOrders = useCallback(
    async (page = 1, pageSize = 10) => {
      const endpoint = `/${rootEndpoint}`
      try {
        const response = await callApi(
          'get',
          endpoint,
          {},
          {
            page,
            limit: pageSize
          }
        )
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const getOrderById = useCallback(
    async (orderId: string, staff: string) => {
      const endpoint = `/${rootEndpoint}/${orderId}`
      try {
        if (staff === StaffRoles.DELIVERY_STAFF) {
          const response = await callApi('get', `${endpoint}/shipping`)
          return response.data
        } else if (staff === StaffRoles.ADMIN || staff === StaffRoles.STAFF) {
          const response = await callApi('get', endpoint)
          return response.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const cancelOrder = useCallback(
    async (orderId: string, data: ICancelOrderProps) => {
      const endpoint = `/${rootEndpoint}/${orderId}/cancel`
      try {
        notifyLoading()
        const response = await callApi('patch', endpoint, {}, {}, data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const confirmOrder = useCallback(
    async (orderId: string) => {
      const endpoint = `/${rootEndpoint}/${orderId}/confirm`
      try {
        notifyLoading()
        const response = await callApi('patch', endpoint)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const getDeliveryStaffOrderById = useCallback(
    async (orderId: string) => {
      const endpoint = `/${rootEndpoint}/${orderId}/shipping`
      try {
        const response = await callApi('get', endpoint)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  return { getAllOrders, getOrderById, cancelOrder, confirmOrder, getDeliveryStaffOrderById }
}

export default useOrdersApi

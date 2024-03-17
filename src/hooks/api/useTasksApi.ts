import { useCallback } from 'react'
import useApi from './useApi'
import { IAssignDelivery } from '~/pages/delivery/modal/CreateDeliveryModal'

const useTasksApi = () => {
  const rootEndpoint = 'task'

  const callApi = useApi()

  const getAllTasksForAdmin = useCallback(
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

  const getAllTasksForDelivery = useCallback(
    async (page = 1, pageSize = 10) => {
      const endpoint = `/${rootEndpoint}`
      try {
        const response = await callApi(
          'get',
          endpoint,
          {},
          {
            type: 'SHIPPING',
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

  const createShippingTask = useCallback(
    async (data: IAssignDelivery) => {
      try {
        const endpoint = `/${rootEndpoint}/shipping`
        const response = await callApi('post', endpoint, {}, {}, data)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const changeShippingProgress = useCallback(
    async (orderId: string) => {
      const endpoint = `${rootEndpoint}/shipping/${orderId}/progress`
      try {
        const response = await callApi('patch', endpoint)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const changeShippingComplete = useCallback(
    async (orderId: string) => {
      const endpoint = `${rootEndpoint}/shipping/${orderId}/complete`
      try {
        const response = await callApi('patch', endpoint)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  return {
    getAllTasksForAdmin,
    getAllTasksForDelivery,
    createShippingTask,
    changeShippingProgress,
    changeShippingComplete
  }
}

export default useTasksApi

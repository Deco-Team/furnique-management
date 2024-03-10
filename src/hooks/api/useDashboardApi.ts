import { useCallback } from 'react'
import useApi from './useApi'

const useDashboardApi = () => {
  const callApi = useApi()
  const rootEndpoint = '/analytics'

  const getOrderNumber = useCallback(
    async (periodType: string) => {
      const endpoint = `${rootEndpoint}/current/orders?periodType=${periodType}`
      try {
        const response = await callApi('get', endpoint)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const getSaleNumber = useCallback(
    async (periodType: string) => {
      const endpoint = `${rootEndpoint}/current/sales?periodType=${periodType}`
      try {
        const response = await callApi('get', endpoint)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const getProductNumber = useCallback(
    async (periodType: string) => {
      const endpoint = `${rootEndpoint}/current/products?periodType=${periodType}`
      try {
        const response = await callApi('get', endpoint)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const getCustomerNumber = useCallback(
    async (periodType: string) => {
      const endpoint = `${rootEndpoint}/current/customers?periodType=${periodType}`
      try {
        const response = await callApi('get', endpoint)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const getSaleStatistic = useCallback(
    async (year: number) => {
      const endpoint = `${rootEndpoint}/statistic/sales?year=${year}`
      try {
        const response = await callApi('get', endpoint)
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  return { getOrderNumber, getSaleNumber, getProductNumber, getCustomerNumber, getSaleStatistic }
}

export default useDashboardApi

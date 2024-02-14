import { useCallback } from 'react'
import useApi from './useApi'

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

  return { getAllOrders }
}

export default useOrdersApi

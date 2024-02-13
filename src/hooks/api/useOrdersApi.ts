import { useCallback } from 'react'
import useApi from './useApi'

const useOrdersApi = () => {
  const callApi = useApi()
  const rootEndpoint = 'orders/provider'

  const getAllOrders = useCallback(async () => {
    const endpoint = `/${rootEndpoint}`
    try {
      const response = await callApi('get', endpoint)
      return response.data.docs
    } catch (error) {
      console.log(error)
    }
  }, [callApi])

  return { getAllOrders }
}

export default useOrdersApi

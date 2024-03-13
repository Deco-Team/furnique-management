import { useCallback } from 'react'
import useApi from './useApi'

const useTransactionApi = () => {
  const rootEndpoint = '/payment'

  const callApi = useApi()

  const getAllTransactions = useCallback(
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

  return {
    getAllTransactions
  }
}

export default useTransactionApi

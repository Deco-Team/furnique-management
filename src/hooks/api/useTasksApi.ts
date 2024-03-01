import { useCallback } from 'react'
import useApi from './useApi'

const useTasksApi = () => {
  const rootEndpoint = '/task'

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

  return { getAllTasksForAdmin }
}

export default useTasksApi

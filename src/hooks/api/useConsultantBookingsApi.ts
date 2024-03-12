import { useCallback } from 'react'
import useApi from './useApi'

const useConsultBookingsApi = () => {
  const callApi = useApi()
  const rootEndpoint = '/consultant-bookings/provider'

  const getConsultantBookings = useCallback(
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

  return { getConsultantBookings }
}

export default useConsultBookingsApi

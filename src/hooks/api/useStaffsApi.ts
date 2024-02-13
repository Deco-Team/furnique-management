import { useCallback } from 'react'
import { IStaffsRequest } from '~/global/interfaces/staffsInterface'
import useApi from './useApi'

const useStaffsApi = () => {
  const callApi = useApi()
  const rootEndpoint = 'staff'

  const getAllStaffs = useCallback(async () => {
    const endpoint = `/${rootEndpoint}`
    try {
      const response = await callApi('get', endpoint)
      return response.data.docs
    } catch (error) {
      console.log(error)
    }
  }, [callApi])

  const getStaffById = useCallback(
    async (staffId: string) => {
      const endpoint = `/${rootEndpoint}/${staffId}`
      try {
        const response = await callApi('get', endpoint)
        return response.data.docs
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const createStaff = useCallback(
    async (data: IStaffsRequest) => {
      const endpoint = `/${rootEndpoint}`
      try {
        const response = await callApi('post', endpoint, {}, {}, data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  return { getAllStaffs, createStaff, getStaffById }
}

export default useStaffsApi

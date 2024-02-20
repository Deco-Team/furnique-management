import { useCallback } from 'react'
import { IStaffsRequest } from '~/global/interfaces/staffsInterface'
import useApi from './useApi'
import { notifyLoading } from '~/global/toastify'

const useStaffsApi = () => {
  const callApi = useApi()
  const rootEndpoint = 'staff'

  const getAllStaffs = useCallback(
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

  const getStaffById = useCallback(
    async (staffId: string) => {
      const endpoint = `/${rootEndpoint}/${staffId}`
      try {
        const response = await callApi('get', endpoint)
        return response.data
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

  const updateStaff = useCallback(
    async (staffId: string, data: IStaffsRequest, isWithImage = true) => {
      const endpoint = `/${rootEndpoint}/${staffId}`
      try {
        if (!isWithImage) notifyLoading()
        const response = await callApi('patch', endpoint, {}, {}, data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const deactiveStaff = useCallback(
    async (staffId: string) => {
      const endpoint = `/${rootEndpoint}/${staffId}/deactivate`
      try {
        notifyLoading()
        const response = await callApi('delete', endpoint)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  return { getAllStaffs, createStaff, getStaffById, updateStaff, deactiveStaff }
}

export default useStaffsApi

import { ICategory } from '~/global/interfaces/categoriesInterface'
import useApi from './useApi'
import { useCallback } from 'react'
//TODO: waiting for back-end document api :)
const useProductsApi = () => {
  const callApi = useApi()
  const rootEndpoint = 'categories/provider'

  const getAllCategories = useCallback(async () => {
    const endpoint = `/${rootEndpoint}`
    try {
      const response = await callApi('get', endpoint)
      return response.data.docs
    } catch (error) {
      console.log(error)
    }
  }, [callApi])

  const createCategory = useCallback(
    async (data: ICategory) => {
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

  const updateCategory = useCallback(
    async (categoryId: string, data: ICategory) => {
      const endpoint = `/${rootEndpoint}/${categoryId}`
      try {
        const response = await callApi('put', endpoint, {}, {}, data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  return { getAllCategories, createCategory, updateCategory }
}

export default useProductsApi

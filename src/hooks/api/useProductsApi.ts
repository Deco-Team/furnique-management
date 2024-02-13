import { useCallback } from 'react'
import { IProductsResponse } from '~/global/interfaces/productInterface'
import useApi from './useApi'
import { IProductsProps } from '~/global/interfaces/interface'
import { notifyLoading } from '~/global/toastify'

const useProductsApi = () => {
  const callApi = useApi()
  const rootEndpoint = 'products/provider'

  const getAllProducts = useCallback(
    async (page = 1, pageSize = 10) => {
      const endpoint = `/${rootEndpoint}`
      try {
        const response = await callApi('get', endpoint, {}, { page, limit: pageSize })
        return response.data
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const createProduct = useCallback(
    async (data: IProductsProps) => {
      const endpoint = `/${rootEndpoint}`
      try {
        notifyLoading()
        const response = await callApi('post', endpoint, {}, {}, data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const updateProduct = useCallback(
    async (productId: string, data: IProductsResponse) => {
      const endpoint = `/${rootEndpoint}/${productId}`
      try {
        const response = await callApi('put', endpoint, {}, {}, data)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  return { getAllProducts, createProduct, updateProduct }
}

export default useProductsApi

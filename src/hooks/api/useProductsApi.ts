import { useCallback } from 'react'
import { IProductsResponse } from '~/global/interfaces/productInterface'
import useApi from './useApi'
import { notifyError } from '~/global/toastify'

const useProductsApi = () => {
  const callApi = useApi()
  const rootEndpoint = 'products/provider'

  const getAllProducts = useCallback(async () => {
    const endpoint = `/${rootEndpoint}`
    try {
      const response = await callApi('get', endpoint)
      return response.data.docs
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    }
  }, [callApi])

  const createProduct = useCallback(
    async (data: IProductsResponse) => {
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

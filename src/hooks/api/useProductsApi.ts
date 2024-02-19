import { useCallback } from 'react'
import useApi from './useApi'
import { IProductsProps } from '~/global/interfaces/interface'
import { notifyError, notifyLoading } from '~/global/toastify'

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

  const getProductById = useCallback(
    async (productId: string) => {
      const endpoint = `/${rootEndpoint}/${productId}`
      try {
        const response = await callApi('get', endpoint)
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
    async (productId: string, data: IProductsProps) => {
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

  return { getAllProducts, createProduct, updateProduct, getProductById }
}

export default useProductsApi

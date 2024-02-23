import { useCallback } from 'react'
import useApi from './useApi'
import { IProductsProps } from '~/global/interfaces/interface'

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
      const transformedVariants = data.variants.map((variant) => {
        const transformedKeyValue: Record<string, string> = {}
        Object.values(variant.keyValue).forEach(({ key, value }) => {
          transformedKeyValue[key] = value
        })
        return {
          ...variant,
          keyValue: transformedKeyValue
        }
      })
      const productData = { ...data, variants: transformedVariants }

      try {
        const response = await callApi('post', endpoint, {}, {}, productData)
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
      const transformedVariants = data.variants.map((variant) => {
        const transformedKeyValue: Record<string, string> = {}
        Object.values(variant.keyValue).forEach(({ key, value }) => {
          transformedKeyValue[key] = value
        })
        return {
          ...variant,
          keyValue: transformedKeyValue
        }
      })
      const productData = { ...data, variants: transformedVariants }

      try {
        const response = await callApi('put', endpoint, {}, {}, productData)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  const deleteProductById = useCallback(
    async (productId: string) => {
      const endpoint = `/${rootEndpoint}/${productId}`
      try {
        const response = await callApi('delete', endpoint)
        return response
      } catch (error) {
        console.log(error)
      }
    },
    [callApi]
  )

  return { getAllProducts, createProduct, updateProduct, getProductById, deleteProductById }
}

export default useProductsApi

import { ICategory } from '~/global/interfaces/categoriesInterface'
import useApi from './useApi'
import { useCallback } from 'react'
import { notifyError, notifyLoading } from '~/global/toastify'

const useCategoriesApi = () => {
  const callApi = useApi()
  const rootEndpoint = 'categories/provider'

  const uploadCloudinary = useCallback(async (files: File[], publicId: string) => {
    const formData = new FormData()
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[0])
      formData.append('cloud_name', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)
      formData.append('upload_preset', import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET)
      formData.append('public_id', publicId.trim())
      const contentRange = `bytes 0-${files[0].size - 1}/${files[0].size}`
      const headers = {
        'X-Unique-Upload-Id': publicId,
        'Content-Range': contentRange
      }
      try {
        const response = await fetch(import.meta.env.VITE_CLOUDINARY_UPLOAD_API, {
          method: 'POST',
          body: formData,
          headers: headers
        })
        if (!response.ok) {
          notifyError('Lỗi khi upload ảnh')
          return
        }
      } catch (error) {
        notifyError('Có lỗi xảy ra')
      }
    }
  }, [])

  const getAllCategories = useCallback(async () => {
    const endpoint = `/${rootEndpoint}`
    try {
      const response = await callApi('get', endpoint)
      return response.data.docs
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    }
  }, [callApi])

  const getCategoryById = useCallback(
    async (categoryId: string) => {
      const endpoint = `/${rootEndpoint}/${categoryId}`
      try {
        const response = await callApi('get', endpoint)
        return response.data
      } catch (error) {
        notifyError('Có lỗi xảy ra')
      }
    },
    [callApi]
  )

  const createCategory = useCallback(
    async (data: ICategory) => {
      const endpoint = `/${rootEndpoint}`
      try {
        notifyLoading()
        const response = await callApi('post', endpoint, {}, {}, data)
        return response
      } catch (error) {
        notifyError('Có lỗi xảy ra')
      }
    },
    [callApi]
  )

  const updateCategory = useCallback(
    async (categoryId: string, data: ICategory) => {
      const endpoint = `/${rootEndpoint}/${categoryId}`
      try {
        notifyLoading()
        const response = await callApi('put', endpoint, {}, {}, data)
        return response
      } catch (error) {
        notifyError('Có lỗi xảy ra')
      }
    },
    [callApi]
  )

  return { getAllCategories, createCategory, updateCategory, uploadCloudinary, getCategoryById }
}

export default useCategoriesApi

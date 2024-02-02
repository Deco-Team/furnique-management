import { useEffect, useState } from 'react'
import Loading from '~/components/loading/Loading'
import CommonTable from '~/components/table/CommonTable'
import { IProductRows } from '~/global/interfaces/categoriesInterface'
import { IProduct } from '~/global/interfaces/productInterface'
import useProductsApi from '~/hooks/api/useProductsApi'
import { productsColumn } from './Column'
import dayjs from 'dayjs'

const ProductsTable = () => {
  const { getAllProducts } = useProductsApi()
  const [isLoading, setIsLoading] = useState(false)
  const [productRows, setProductRows] = useState<IProductRows[]>([])
  useEffect(() => {
    getCategoriesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getCategoriesData = async () => {
    try {
      setIsLoading(true)
      const productsData = await getAllProducts()
      const productRows = productsData.map((product: IProduct) => ({
        ...product,
        id: product._id,
        categories: product.categories[0].name,
        createdAt: dayjs(product.createdAt).format('DD/MM/YYYY')
      }))
      setProductRows(productRows)
    } catch (error) {
      console.error()
    } finally {
      setIsLoading(false)
    }
  }
  return <>{isLoading ? <Loading /> : <CommonTable columns={productsColumn} rows={productRows} />}</>
}

export default ProductsTable

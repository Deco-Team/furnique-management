import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import Loading from '~/components/loading/Loading'
import CommonTable from '~/components/table/CommonTable'
import { IProduct, IProductRows } from '~/global/interfaces/productInterface'
import useProductsApi from '~/hooks/api/useProductsApi'
import { productsColumn } from './Column'

const ProductsTable = () => {
  const { getAllProducts } = useProductsApi()
  const [isLoading, setIsLoading] = useState(false)
  const [productRows, setProductRows] = useState<IProductRows[]>([])
  useEffect(() => {
    getProductsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getProductsData = async () => {
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

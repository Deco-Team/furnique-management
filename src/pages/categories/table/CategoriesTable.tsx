import CommonTable from '~/components/table/CommonTable'
import { categoriesColumn } from './Coloumn'
import useCategoriesApi from '~/hooks/api/useCategoriesApi'
import { useEffect, useState } from 'react'
import { ICategoryRows } from '~/global/interfaces/categoriesInterface'
import { ICategoriesProps } from '~/global/interfaces/interface'
import Loading from '~/components/loading/Loading'
import { useNavigate } from 'react-router-dom'
const CategoriesTable = () => {
  const { getAllCategories } = useCategoriesApi()
  const [isLoading, setIsLoading] = useState(false)
  const [categoriesRows, setCategoriesRows] = useState<ICategoryRows[]>([])
  const navigate = useNavigate()
  useEffect(() => {
    getCategoriesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getCategoriesData = async () => {
    try {
      setIsLoading(true)
      const categoriesData = await getAllCategories()
      const categoriesRows = categoriesData.map((row: ICategoriesProps) => ({
        ...row,
        id: row._id
      }))
      setCategoriesRows(categoriesRows)
    } catch (error) {
      console.error()
    } finally {
      setIsLoading(false)
    }
  }
  return isLoading ? <Loading /> : <CommonTable columns={categoriesColumn({ navigate })} rows={categoriesRows} />
}

export default CategoriesTable

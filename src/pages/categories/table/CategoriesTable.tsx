import CommonTable from '~/components/table/CommonTable'
import { categoriesColumn } from './Coloumn'
import useCategoriesApi from '~/hooks/api/useCategoriesApi'
import { useEffect, useState } from 'react'
import { ICategoryRows } from '~/global/interfaces/categoriesInterface'
import { ICategoriesProps } from '~/global/interfaces/interface'
const CategoriesTable = () => {
  const { getAllCategories } = useCategoriesApi()
  const [categoriesRows, setCategoriesRows] = useState<ICategoryRows[]>([])
  useEffect(() => {
    getCategoriesData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getCategoriesData = async () => {
    const categoriesData = await getAllCategories()
    const categoriesRows = categoriesData.map((row: ICategoriesProps) => ({
      ...row,
      id: row._id
    }))
    setCategoriesRows(categoriesRows)
  }
  return (
    <>
      <CommonTable columns={categoriesColumn} rows={categoriesRows} />
    </>
  )
}

export default CategoriesTable

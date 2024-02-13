import { useEffect, useState } from 'react'
import Loading from '~/components/loading/Loading'
import CommonTable from '~/components/table/CommonTable'
import { staffsColumn } from './Column'
import { IStaffRows } from '~/global/interfaces/staffsInterface'
import useStaffsApi from '~/hooks/api/useStaffsApi'
import { notifyError } from '~/global/toastify'

const StaffsTable = () => {
  const { getAllStaffs } = useStaffsApi()
  const [isLoading, setIsLoading] = useState(false)
  const [staffsRows, setStaffsRow] = useState<IStaffRows[]>([])
  useEffect(() => {
    getStaffList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getStaffList = async () => {
    try {
      setIsLoading(true)
      const staffsData = await getAllStaffs()
      const staffsRows = staffsData.map((staff: IStaffRows) => ({
        ...staff,
        id: staff._id
      }))
      setStaffsRow(staffsRows)
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    } finally {
      setIsLoading(false)
    }
  }
  return <>{isLoading ? <Loading /> : <CommonTable columns={staffsColumn} rows={staffsRows} />}</>
}

export default StaffsTable

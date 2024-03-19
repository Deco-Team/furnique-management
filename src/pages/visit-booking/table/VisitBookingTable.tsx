import { useEffect, useState } from 'react'
import Loading from '~/components/loading/Loading'
import CommonTable from '~/components/table/CommonTable'
import { consultantsColumn } from './Column'
// import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { IVisitBookingProps, IVisitBookingRows } from '~/global/interfaces/visitBookingInterface'
import useVisitBookingsApi from '~/hooks/api/useVisitBookingsApi'

const VisitBookingTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [consultantBookingRows, setConsultantBookingRows] = useState<IVisitBookingRows[]>([])
  const [totalRows, setTotalRows] = useState(0)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const { getVisitBookings } = useVisitBookingsApi()

  // const navigate = useNavigate()

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
  }

  useEffect(() => {
    getConsultantBookingsData(page, pageSize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, pageSize])

  const getConsultantBookingsData = async (page: number, pageSize: number) => {
    try {
      setIsLoading(true)
      const consultantBookings = await getVisitBookings(page, pageSize)
      const consultantBookingRows = consultantBookings.docs.map((row: IVisitBookingProps) => ({
        ...row,
        customer: `${row.customer.lastName} ${row.customer.firstName}`,
        customerEmail: row.customer.email,
        customerPhone: row.customer.phone,
        bookingDate: moment(row.bookingDate).format('hh:mm DD/MM/yyyy'),
        id: row._id
      }))
      setConsultantBookingRows(consultantBookingRows)
      setTotalRows(consultantBookingRows.totalDocs)
    } catch (error) {
      console.error()
    } finally {
      setIsLoading(false)
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
    <CommonTable
      columns={consultantsColumn(/* { navigate } */)}
      rows={consultantBookingRows}
      totalRows={totalRows}
      page={page}
      pageSize={pageSize}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
    />
  )
}

export default VisitBookingTable

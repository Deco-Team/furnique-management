import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '~/components/loading/Loading'
import CommonTable from '~/components/table/CommonTable'
import { ITransactionRow } from '~/global/interfaces/transactionInterface'
import { transactionsColumn } from './Column'

const TransactionTable = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [transactionsRows, setTransactionsRows] = useState<ITransactionRow[]>([])
  const [totalRows, setTotalRows] = useState(0)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize)
  }

  const navigate = useNavigate()

  return isLoading ? (
    <Loading />
  ) : (
    <CommonTable
      columns={transactionsColumn({ navigate })}
      rows={transactionsRows}
      totalRows={totalRows}
      page={page}
      pageSize={pageSize}
      onPageChange={handlePageChange}
      onPageSizeChange={handlePageSizeChange}
    />
  )
}

export default TransactionTable

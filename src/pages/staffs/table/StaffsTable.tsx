import { useState } from 'react'
import Loading from '~/components/loading/Loading'
import CommonTable from '~/components/table/CommonTable'
import { staffsColumn } from './Column'
import { staffsRows } from '~/mocks/staffsData'

const StaffsTable = () => {
  const [isLoading] = useState(false)

  return <>{isLoading ? <Loading /> : <CommonTable columns={staffsColumn} rows={staffsRows} />}</>
}

export default StaffsTable

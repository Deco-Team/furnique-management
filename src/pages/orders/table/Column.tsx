import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ActionCell from '~/components/table/ActionCell'
import StatusTextDiv from './StatusTextDiv'

export const ordersColumn: GridColDef[] = [
  {
    field: 'id',
    headerName: 'STT',
    width: 80,
    filterable: false,
    sortable: false,
    valueGetter: (params) => {
      const page = params.api.state.pagination.paginationModel.page
      const pageSize = params.api.state.pagination.paginationModel.pageSize
      const rowIndex = params.api.getRowIndexRelativeToVisibleRows(params.row.id)
      return page * pageSize + rowIndex + 1
    }
  },
  { field: 'customer', headerName: 'Khách hàng', width: 180 },
  { field: 'orderDate', headerName: 'Ngày đặt', type: 'Date', width: 150 },
  {
    field: 'totalAmount',
    headerName: 'Tổng cộng',
    headerAlign: 'left',
    type: 'number',
    width: 120
  },
  {
    field: 'transactionStatus',
    headerName: 'Trạng thái giao dịch',
    width: 180,
    align: 'center',
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.transactionStatus} />
  },
  {
    field: 'orderStatus',
    headerName: 'Trạng thái đơn hàng',
    width: 180,
    align: 'center',
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.orderStatus} />
  },
  {
    field: 'notes',
    headerName: 'Lưu ý',
    width: 200,
    filterable: false
  },
  {
    field: 'actions',
    headerName: 'Thao tác',
    width: 150,
    sortable: false,
    filterable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params: GridRenderCellParams) => {
      return (
        <ActionCell
          id={params.row.id as number}
          buttons={[
            { icon: <EditIcon />, onClick: () => console.log('Edit clicked') },
            { icon: <VisibilityIcon />, onClick: () => console.log('View clicked') }
          ]}
        />
      )
    }
  }
]

import VisibilityIcon from '@mui/icons-material/Visibility'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ActionCell from '~/components/table/ActionCell'
import StatusTextDiv from '~/pages/orders/table/StatusTextDiv'

export const transactionsColumn: GridColDef[] = [
  {
    field: 'id',
    headerName: 'STT',
    width: 50,
    filterable: false,
    sortable: false,
    valueGetter: (params) => {
      const page = params.api.state.pagination.paginationModel.page
      const pageSize = params.api.state.pagination.paginationModel.pageSize
      const rowIndex = params.api.getRowIndexRelativeToVisibleRows(params.row.id)
      return page * pageSize + rowIndex + 1
    }
  },
  {
    field: 'orderInfo',
    headerName: 'Tên giao dịch',
    width: 500,
    filterable: false,
    valueGetter: (params) => params.row.transaction.orderInfo
  },
  {
    field: 'paymentMethod',
    headerName: 'Phương thức thanh toán',
    width: 200,
    filterable: false,
    sortable: false
  },
  {
    field: 'amount',
    headerName: 'Số tiền',
    width: 200,
    filterable: false,
    sortingOrder: ['asc', 'desc'],
    valueFormatter: (params) => {
      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      })
      return formatter.format(params.value)
    }
  },
  {
    field: 'transactionStatus',
    headerName: 'Trạng thái giao dịch',
    width: 200,
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.transactionStatus} />
  },
  {
    field: 'actions',
    headerName: 'Thao tác',
    width: 100,
    sortable: false,
    filterable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => {
      return (
        <ActionCell
          id={params.row.id as number}
          buttons={[{ icon: <VisibilityIcon />, onClick: () => () => console.log('Delete clicked') }]}
        />
      )
    }
  }
]

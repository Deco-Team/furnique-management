import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import StatusTextDiv from '~/pages/orders/table/StatusTextDiv'

export const transactionsColumn: GridColDef[] = [
  {
    field: 'id',
    headerName: 'STT',
    width: 100,
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
    width: 450,
    filterable: false,
    valueGetter: (params) => {
      if(params.row.transaction.data?.orderCode) return params.row.transaction.data?.orderCode
      return params.row.transaction.orderCode
    }
  },
  {
    field: 'paymentMethod',
    headerName: 'Phương thức thanh toán',
    width: 300,
    filterable: false,
    sortable: false
  },
  {
    field: 'amount',
    headerName: 'Số tiền',
    width: 250,
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
    width: 300,
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.transactionStatus} />
  }
]

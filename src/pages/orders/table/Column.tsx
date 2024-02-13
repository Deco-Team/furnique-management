import VisibilityIcon from '@mui/icons-material/Visibility'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ActionCell from '~/components/table/ActionCell'
import { ScreenPath } from '~/global/enum'
import { ColumnProps } from '~/global/interfaces/interface'
import StatusTextDiv from './StatusTextDiv'

export const ordersColumn = ({ navigate }: ColumnProps): GridColDef[] => [
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
  { field: 'customer', headerName: 'Khách hàng', width: 180 },
  { field: 'orderDate', headerName: 'Ngày đặt', type: 'Date', width: 100 },
  {
    field: 'totalAmount',
    headerName: 'Tổng cộng',
    headerAlign: 'right',
    type: 'number',
    width: 180
  },
  {
    field: 'transactionStatus',
    headerName: 'Trạng thái giao dịch',
    width: 180,
    headerAlign: 'center',
    align: 'center',
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.transactionStatus} />
  },
  {
    field: 'orderStatus',
    headerName: 'Trạng thái đơn hàng',
    width: 180,
    headerAlign: 'center',
    align: 'center',
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.orderStatus} />
  },
  {
    field: 'notes',
    headerName: 'Lưu ý',
    width: 280,
    filterable: false
  },
  {
    field: 'actions',
    headerName: 'Thao tác',
    width: 100,
    sortable: false,
    filterable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params: GridRenderCellParams) => {
      const handleViewButton = (orderId: string) => {
        navigate(ScreenPath.VIEW_ORDER.replace(':orderId', orderId))
      }
      return (
        <ActionCell
          id={params.row.id as number}
          buttons={[{ icon: <VisibilityIcon />, onClick: () => handleViewButton(params.row.id) }]}
        />
      )
    }
  }
]

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ActionCell from '~/components/table/ActionCell'
import StatusTextDiv from './StatusTextDiv'

export const ordersColumn: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    filterable: false,
    sortable: false
  },
  {
    field: 'product',
    headerName: 'Sản phẩm',
    width: 200,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  { field: 'orderDate', headerName: 'Ngày đặt', type: 'Date', width: 150 },
  { field: 'customer', headerName: 'Khách hàng', width: 160 },

  {
    field: 'total',
    headerName: 'Tổng cộng',
    headerAlign: 'left',
    type: 'number',
    width: 120
  },
  {
    field: 'payment',
    headerName: 'Thanh toán',
    width: 150
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 150,
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.status} />
  },
  {
    field: 'actions',
    headerName: 'Thao tác',
    width: 250,
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
            { icon: <VisibilityIcon />, onClick: () => console.log('View clicked') },
            { icon: <DeleteIcon sx={{ color: 'var(--red-color)' }} />, onClick: () => console.log('Delete clicked') }
          ]}
        />
      )
    }
  }
]

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ActionCell from '~/components/table/ActionCell'
import CardProduct from './CardProduct'
import StatusTextDiv from './StatusTextDiv'

export const productsColumn: GridColDef[] = [
  {
    field: 'id',
    headerName: 'STT',
    width: 50,
    filterable: false,
    sortable: false
  },
  {
    field: 'product',
    headerName: 'Sản phẩm',
    width: 250,
    filterable: false,
    sortingOrder: ['asc', 'desc'],
    renderCell: (param: GridRenderCellParams) => <CardProduct product={param.row.product} />
  },
  { field: 'sku', headerName: 'SKU', width: 90 },
  { field: 'category', headerName: 'Phân loại', width: 120 },

  {
    field: 'stock',
    headerName: 'Còn hàng',
    headerAlign: 'left',
    type: 'number',
    width: 110
  },
  {
    field: 'price',
    headerName: 'Giá',
    width: 100
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 150,
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.status} />
  },
  {
    field: 'added',
    headerName: 'Ngày nhập',
    type: 'Date',
    width: 120
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

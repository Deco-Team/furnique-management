import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import CardProducts from '../components/CardProducts'

export const orderListColumns: GridColDef[] = [
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
  {
    field: 'products',
    headerName: 'Sản phẩm',
    width: 350,
    renderCell: (param: GridRenderCellParams) => (
      <CardProducts name={param.row.products} image={param.row.image} variant={param.row.variant} />
    )
  },
  { field: 'sku', headerName: 'SKU', width: 180 },
  { field: 'orderDate', headerName: 'Ngày đặt', width: 180 },
  {
    field: 'quantity',
    headerName: 'Số lượng',
    headerAlign: 'right',
    type: 'number',
    width: 150
  },
  {
    field: 'price',
    headerName: 'Giá tiền',
    headerAlign: 'right',
    type: 'number',
    width: 150
  },
  {
    field: 'totalAmount',
    headerName: 'Tổng cộng',
    headerAlign: 'right',
    type: 'number',
    width: 150
  }
]

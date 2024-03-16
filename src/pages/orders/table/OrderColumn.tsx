import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import CardProducts from '../components/CardProducts'

export const orderListColumns: GridColDef[] = [
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
    field: 'products',
    headerName: 'Sản phẩm',
    width: 250,
    renderCell: (param: GridRenderCellParams) => (
      <CardProducts name={param.row.products} image={param.row.image} variant={param.row.variant} />
    )
  },
  { field: 'sku', headerName: 'SKU', width: 110, sortable: false },
  { field: 'orderDate', headerName: 'Ngày đặt', width: 170 },
  {
    field: 'quantity',
    headerName: 'Số lượng',
    headerAlign: 'right',
    type: 'number',
    width: 80,
    sortable: false
  },
  {
    field: 'price',
    headerName: 'Giá tiền',
    headerAlign: 'right',
    type: 'number',
    width: 90,
    sortable: false,
    valueFormatter: (params) => {
      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      })
      return formatter.format(params.value)
    }
  },
  {
    field: 'totalAmount',
    headerName: 'Tổng cộng',
    headerAlign: 'right',
    type: 'number',
    width: 100,
    sortable: false,
    valueFormatter: (params) => {
      const formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      })
      return formatter.format(params.value)
    }
  }
]

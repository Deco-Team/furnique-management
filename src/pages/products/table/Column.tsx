import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ActionCell from '~/components/table/ActionCell'
import StatusTextDiv from './StatusTextDiv'

export const productsColumn: GridColDef[] = [
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
    field: 'name',
    headerName: 'Sản phẩm',
    width: 180,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  { field: 'categories', headerName: 'Phân loại', width: 150 },
  { field: 'description', headerName: 'Mô tả', width: 220 },
  {
    field: 'brand',
    headerName: 'Hãng',
    width: 100
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 150,
    renderCell: (param: GridRenderCellParams) => <StatusTextDiv status={param.row.status} />
  },
  {
    field: 'createdAt',
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

import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ActionCell from '~/components/table/ActionCell'

export const categoriesColumn: GridColDef[] = [
  {
    field: 'id',
    headerName: 'No',
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
    field: 'name',
    headerName: 'Tên phân loại',
    width: 425,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  {
    field: 'description',
    headerName: 'Mô tả',
    width: 500,
    filterable: false
  },
  // { field: 'sold', headerName: 'Đã bán', type: 'number', width: 200 },
  // {
  //   field: 'stock',
  //   headerName: 'Còn hàng',
  //   type: 'number',
  //   width: 150
  // },
  // {
  //   field: 'added',
  //   headerName: 'Ngày nhập',
  //   type: 'Date',
  //   width: 200
  // },
  {
    field: 'actions',
    headerName: 'Thao tác',
    width: 200,
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

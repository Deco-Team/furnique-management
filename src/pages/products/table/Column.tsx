import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import ActionCell from '~/components/table/ActionCell'
import StatusTextDiv from './StatusTextDiv'
import { ScreenPath } from '~/global/enum'
import { ColumnProps } from '~/global/interfaces/interface'

export const productsColumn = ({ navigate }: ColumnProps): GridColDef[] => [
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
    width: 220,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  { field: 'categories', headerName: 'Phân loại', width: 180 },
  { field: 'description', headerName: 'Mô tả', width: 280 },
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
    width: 200,
    sortable: false,
    filterable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params: GridRenderCellParams) => {
      const handleUpdateButton = (categoryId: string) => {
        navigate(ScreenPath.UPDATE_PRODUCT.replace(':productId', categoryId))
      }
      const handleDeleteButton = (categoryId: string) => {
        navigate(ScreenPath.DELETE_PRODUCT.replace(':productId', categoryId))
      }
      return (
        <ActionCell
          id={params.row.id as number}
          buttons={[
            { icon: <EditIcon />, onClick: () => handleUpdateButton(params.row.id) },
            { icon: <VisibilityIcon />, onClick: () => console.log('View clicked') },
            {
              icon: <DeleteIcon sx={{ color: 'var(--red-color)' }} />,
              onClick: () => handleDeleteButton(params.row.id)
            }
          ]}
        />
      )
    }
  }
]

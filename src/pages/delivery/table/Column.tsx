import { Edit, Visibility } from '@mui/icons-material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import Chip from '~/components/chip/Chip'
import ActionsCell from '~/components/table/ActionCell'
import { ColumnProps } from '~/global/interfaces/interface'

export const deliveriesColumn = ({ navigate }: ColumnProps): GridColDef[] => [
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
    field: 'title',
    headerName: 'Tên công việc',
    width: 150,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  {
    field: 'assignee',
    headerName: 'Người thực hiện',
    width: 180,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  {
    field: 'reporter',
    headerName: 'Người giao việc',
    width: 200,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  {
    field: 'dueDate',
    headerName: 'Ngày hết hạn',
    width: 175,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  {
    field: 'priority',
    headerName: 'Độ ưu tiên',
    width: 150,
    filterable: false,
    sortingOrder: ['asc', 'desc'],
    renderCell: (param: GridRenderCellParams) => <Chip status={param.row.priority} />
  },
  {
    field: 'status',
    headerName: 'Trạng thái',
    width: 180,
    filterable: false,
    sortingOrder: ['asc', 'desc'],
    renderCell: (param: GridRenderCellParams) => <Chip status={param.row.status} />
  },
  {
    field: 'actions',
    headerName: 'Thao tác',
    width: 180,
    sortable: false,
    filterable: false,
    headerAlign: 'center',
    align: 'center',
    renderCell: (params) => {
      const handleViewButton = (deliveryId: string) => {
        navigate(deliveryId)
      }
      return (
        <ActionsCell
          id={params.row.id as number}
          buttons={[
            { icon: <Edit />, onClick: () => handleViewButton(params.row.id) },
            { icon: <Visibility />, onClick: () => console.log('View clicked') }
          ]}
        />
      )
    }
  }
]

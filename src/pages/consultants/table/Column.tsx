import { Visibility } from '@mui/icons-material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import Chip from '~/components/chip/Chip'
import ActionsCell from '~/components/table/ActionCell'
import { ScreenPath } from '~/global/enum'
import { ColumnProps } from '~/global/interfaces/interface'

export const consultantsColumn = ({ navigate }: ColumnProps): GridColDef[] => [
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
    field: 'consultant',
    headerName: 'Người tư vấn',
    width: 180,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  {
    field: 'customer',
    headerName: 'Khách hàng',
    width: 200,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  {
    field: 'bookingDate',
    headerName: 'Ngày đặt',
    width: 175,
    filterable: false,
    sortingOrder: ['asc', 'desc']
  },
  {
    field: 'bookingStatus',
    headerName: 'Trạng thái',
    width: 180,
    filterable: false,
    sortingOrder: ['asc', 'desc'],
    renderCell: (param: GridRenderCellParams) => <Chip status={param.row.bookingStatus} />
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
      const handleViewButton = () => {
        navigate(ScreenPath.CONSULTANT_BOOKING_CUSTOMER_INFO.replace(':consultantBookingId', params.row.id.toString()))
      }
      return (
        <ActionsCell
          id={params.row.id as number}
          buttons={[{ icon: <Visibility />, onClick: () => handleViewButton() }]}
        />
      )
    }
  }
]

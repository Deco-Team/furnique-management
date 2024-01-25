import { DataGrid } from '@mui/x-data-grid'
import { IDataTableProps } from '~/global/interface'
const CommonTable = ({ rows, columns }: IDataTableProps) => {
  return (
    <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 }
          }
        }}
        pageSizeOptions={[10, 20]}
        checkboxSelection
        disableColumnMenu
      />
    </div>
  )
}

export default CommonTable

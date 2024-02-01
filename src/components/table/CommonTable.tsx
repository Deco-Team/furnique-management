import { DataGrid } from '@mui/x-data-grid'
import { IDataTableProps } from '~/global/interfaces/interface'
const CommonTable = ({ rows, columns }: IDataTableProps) => {
  return (
    <div style={{ height: 630, width: '100%' }}>
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
        sx={{ backgroundColor: 'var(--white-color)' }}
      />
    </div>
  )
}

export default CommonTable

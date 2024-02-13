import { DataGrid } from '@mui/x-data-grid'
import { IDataTableProps } from '~/global/interfaces/interface'
const CommonTable = ({
  rows,
  totalRows,
  columns,
  page = 1,
  pageSize = 5,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 20]
}: IDataTableProps) => {
  return (
    <div style={{ width: '100%' }}>
      <DataGrid
        paginationMode='server'
        rows={rows}
        rowCount={totalRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: page - 1, pageSize: pageSize }
          }
        }}
        pageSizeOptions={pageSizeOptions}
        onPaginationModelChange={(model) => {
          onPageChange(model.page + 1)
          onPageSizeChange(model.pageSize)
        }}
        checkboxSelection
        disableColumnMenu
        sx={{ backgroundColor: 'var(--white-color)' }}
      />
    </div>
  )
}

export default CommonTable

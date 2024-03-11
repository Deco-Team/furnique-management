import TasksTable from './table/TasksTable'

const Tasks = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      {/* <PrimaryButton name='Thêm Công việc' type='submit' variant='contained' icon={<Add />} /> */}
      <TasksTable />
    </div>
  )
}

export default Tasks

import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import { ScreenPath } from '~/global/enum'
import StaffsTable from './table/StaffsTable'

const Staffs = () => {
  const navigate = useNavigate()
  const handleAddButton = () => {
    navigate(ScreenPath.ADD_PRODUCTS)
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <PrimaryButton
        name='Thêm nhân viên'
        type='submit'
        onClick={handleAddButton}
        variant='contained'
        icon={<AddIcon />}
      />
      <StaffsTable />
    </div>
  )
}

export default Staffs

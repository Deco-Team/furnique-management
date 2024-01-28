import { useNavigate } from 'react-router-dom'
import PrimaryButton from '~/components/button/PrimaryButton'
import { ScreenPath } from '~/global/enum'
import CategoriesTable from './table/CategoriesTable'
import AddIcon from '@mui/icons-material/Add'
const Categories = () => {
  const navigate = useNavigate()
  const handleAddButton = () => {
    navigate(`${ScreenPath.CATEGORIES}/create`)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
      <PrimaryButton
        name='Thêm phân loại'
        type='submit'
        onClick={handleAddButton}
        variant='contained'
        icon={<AddIcon />}
      />
      <CategoriesTable />
    </div>
  )
}

export default Categories

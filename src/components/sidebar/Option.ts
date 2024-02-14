import { GridViewOutlined } from '@mui/icons-material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CategoryIcon from '@mui/icons-material/Category'
import InventoryIcon from '@mui/icons-material/Inventory'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PeopleIcon from '@mui/icons-material/People'
export const optionsSidebar = [
  { id: 1, text: 'Trang chủ', link: 'dashboard', icon: GridViewOutlined },
  { id: 2, text: 'Phân loại', link: 'categories', icon: CategoryIcon },
  { id: 3, text: 'Sản phẩm', link: 'products', icon: InventoryIcon },
  { id: 4, text: 'Đơn hàng', link: 'orders', icon: ListAltIcon },
  { id: 5, text: 'Nhân viên', link: 'staffs', icon: PeopleIcon },
  { id: 6, text: 'Giao dịch', link: 'transactions', icon: AccountBalanceWalletIcon }
]

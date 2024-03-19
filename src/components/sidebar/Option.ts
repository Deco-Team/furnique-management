import { EventAvailable, GridViewOutlined, LocalShipping, SupportAgent, Task } from '@mui/icons-material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import CategoryIcon from '@mui/icons-material/Category'
import InventoryIcon from '@mui/icons-material/Inventory'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PeopleIcon from '@mui/icons-material/People'
import { UserRole } from '~/global/enum'
// export const optionsSidebar = [{ id: 1, text: 'Trang chủ', link: 'dashboard', icon: GridViewOutlined }]
//TODO: make consultant route
const adminSidebar = [
  { id: 1, text: 'Trang chủ', link: 'dashboard', icon: GridViewOutlined },
  { id: 2, text: 'Phân loại', link: 'categories', icon: CategoryIcon },
  { id: 3, text: 'Sản phẩm', link: 'products', icon: InventoryIcon },
  { id: 4, text: 'Đơn hàng', link: 'orders', icon: ListAltIcon },
  { id: 5, text: 'Nhân viên', link: 'staffs', icon: PeopleIcon },
  { id: 6, text: 'Công việc', link: 'tasks', icon: Task },
  { id: 7, text: 'Giao dịch', link: 'transactions', icon: AccountBalanceWalletIcon },
  { id: 8, text: 'Giao hàng', link: 'delivery', icon: LocalShipping },
  { id: 9, text: 'Tư vấn', link: 'consultant-booking', icon: SupportAgent },
  { id: 10, text: 'Đến cửa hàng', link: 'visit-showroom-booking', icon: EventAvailable }
]

const staffSidebar = [
  { id: 1, text: 'Phân loại', link: 'categories', icon: CategoryIcon },
  { id: 2, text: 'Sản phẩm', link: 'products', icon: InventoryIcon },
  { id: 3, text: 'Đơn hàng', link: 'orders', icon: ListAltIcon },
  { id: 4, text: 'Công việc', link: 'tasks', icon: Task },
  { id: 5, text: 'Giao hàng', link: 'delivery', icon: LocalShipping },
  { id: 6, text: 'Tư vấn', link: 'consultant-booking', icon: SupportAgent }
]

const deliverySidebar = [{ id: 1, text: 'Giao hàng', link: 'delivery', icon: LocalShipping }]

const consultantSidebar = [{ id: 1, text: 'Tư vấn', link: 'consultant-booking', icon: SupportAgent }]

export const optionSidebarAuth = (role: string | undefined) => {
  switch (role) {
    case UserRole.ADMIN:
      return adminSidebar
    case UserRole.DELIVERY_STAFF:
      return deliverySidebar
    case UserRole.CONSULTANT_STAFF:
      return consultantSidebar
    case UserRole.STAFF:
      return staffSidebar
    default:
      return []
  }
}

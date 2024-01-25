import {
  DescriptionOutlined,
  GradingOutlined,
  GridViewOutlined,
  SignalCellularAltOutlined,
  TaskAltOutlined
} from '@mui/icons-material'

export const optionsSidebar = [
  { id: 1, text: 'Trang chủ', link: 'dashboard', icon: GridViewOutlined },
  { id: 2, text: 'Phân loại', link: 'categories', icon: DescriptionOutlined },
  { id: 3, text: 'Sản phẩm', link: 'products', icon: TaskAltOutlined },
  { id: 4, text: 'Nhân viên', link: 'employees', icon: GradingOutlined },
  { id: 5, text: 'Giao dịch', link: 'transactions', icon: SignalCellularAltOutlined }
]

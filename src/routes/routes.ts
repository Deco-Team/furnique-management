import { ScreenPath } from '~/global/enum'
import Login from '~/pages/auth/Login'
import AddCategory from '~/pages/categories/addCategory/AddCategory'
import Categories from '~/pages/categories/Categories'
import Dashboard from '~/pages/dashboard/Dashboard'
import Orders from '~/pages/orders/Orders'
import Products from '~/pages/products/Products'

export const publicRoutes = [{ path: '/', component: Login }]

export const privateRoutes = [
  { path: ScreenPath.DASHBOARD, component: Dashboard, title: 'Trang chủ' },
  {
    path: ScreenPath.CATEGORIES,
    component: Categories,
    title: 'Phân loại'
  },
  {
    path: ScreenPath.ADD_CATEGORIES,
    component: AddCategory,
    title: 'Phân loại'
  },
  {
    path: ScreenPath.PRODUCTS,
    component: Products,
    title: 'Sản phẩm'
  },
  {
    path: ScreenPath.ORDERS,
    component: Orders,
    title: 'Đơn hàng'
  }
]

import { ScreenPath } from '~/global/enum'
import Login from '~/pages/auth/Login'
import Categories from '~/pages/categories/Categories'
import Dashboard from '~/pages/dashboard/Dashboard'
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
    path: ScreenPath.PRODUCTS,
    component: Products,
    title: 'Sản phẩm'
  }
]

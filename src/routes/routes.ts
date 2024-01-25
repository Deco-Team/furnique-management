import Login from '~/pages/auth/Login'
import Categories from '~/pages/categories/Categories'
import Dashboard from '~/pages/dashboard/Dashboard'
import Products from '~/pages/products/Products'

export const publicRoutes = [{ path: '/', component: Login }]

export const privateRoutes = [
  { path: '/dashboard', component: Dashboard, title: 'Trang chủ' },
  {
    path: '/categories',
    component: Categories,
    title: 'Phân loại'
  },
  {
    path: '/products',
    component: Products,
    title: 'Sản phẩm'
  }
]

import { ScreenPath } from '~/global/enum'
import Login from '~/pages/auth/Login'
import AddCategory from '~/pages/categories/addCategory/AddCategory'
import Categories from '~/pages/categories/Categories'
import UpdateCategory from '~/pages/categories/updateCategory/UpdateCategory'
import ViewCategoryDetail from '~/pages/categories/viewCategory/ViewCategoryDetail'
import Dashboard from '~/pages/dashboard/Dashboard'
import Orders from '~/pages/orders/Orders'
import AddProduct from '~/pages/products/addProduct/AddProduct'
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
    path: ScreenPath.VIEW_CATEGORY,
    component: ViewCategoryDetail,
    title: 'Phân loại'
  },
  {
    path: ScreenPath.UPDATE_CATEGORY,
    component: UpdateCategory,
    title: 'Phân loại'
  },
  {
    path: ScreenPath.PRODUCTS,
    component: Products,
    title: 'Sản phẩm'
  },
  {
    path: ScreenPath.ADD_PRODUCTS,
    component: AddProduct,
    title: 'Sản phẩm'
  },
  {
    path: ScreenPath.ORDERS,
    component: Orders,
    title: 'Đơn hàng'
  }
]

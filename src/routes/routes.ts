import { ScreenPath } from '~/global/enum'
import Login from '~/pages/auth/Login'
import AddCategory from '~/pages/categories/addCategory/AddCategory'
import Categories from '~/pages/categories/Categories'
import UpdateCategory from '~/pages/categories/updateCategory/UpdateCategory'
import ViewCategoryDetail from '~/pages/categories/viewCategory/ViewCategoryDetail'
import Dashboard from '~/pages/dashboard/Dashboard'
import Orders from '~/pages/orders/Orders'
import ViewOrderDetail from '~/pages/orders/viewOrder/ViewOrderDetail'
import AddProduct from '~/pages/products/addProduct/AddProduct'
import DeleteProduct from '~/pages/products/deleteProduct/DeleteProduct'
import Products from '~/pages/products/Products'
import UpdateProduct from '~/pages/products/updateProduct/UpdateProduct'
import AddStaff from '~/pages/staffs/addStaff/AddStaff'
import Staffs from '~/pages/staffs/Staffs'
import ViewStaffDetail from '~/pages/staffs/viewStaff/ViewStaffDetail'

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
    path: ScreenPath.UPDATE_PRODUCT,
    component: UpdateProduct,
    title: 'Sản phẩm'
  },
  {
    path: ScreenPath.DELETE_PRODUCT,
    component: DeleteProduct,
    title: 'Sản phẩm'
  },
  {
    path: ScreenPath.ORDERS,
    component: Orders,
    title: 'Đơn hàng'
  },
  {
    path: ScreenPath.VIEW_ORDER,
    component: ViewOrderDetail,
    title: 'Đơn hàng'
  },
  {
    path: ScreenPath.STAFFS,
    component: Staffs,
    title: 'Nhân viên'
  },
  {
    path: ScreenPath.ADD_STAFF,
    component: AddStaff,
    title: 'Nhân viên'
  },
  {
    path: ScreenPath.VIEW_STAFF,
    component: ViewStaffDetail,
    title: 'Nhân viên'
  }
]

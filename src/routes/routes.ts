import Login from '~/pages/auth/Login'
import Dashboard from '~/pages/dashboard/Dashboard'

export const publicRoutes = [{ path: '/', component: Login }]

export const privateRoutes = [{ path: '/dashboard', component: Dashboard, title: 'Dashboard' }]

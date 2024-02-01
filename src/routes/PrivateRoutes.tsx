import MainLayout from '~/components/layouts/MainLayout'
import { IMainLayoutProps } from '~/global/interfaces/interface'
import { privateRoutes } from './routes'

const PrivateRoute = ({ Component }: IMainLayoutProps) => {
  const route = privateRoutes.find((r) => r.component === Component)
  const title = route ? route.title : ''
  return (
    <>
      <MainLayout title={title}>
        <Component />
      </MainLayout>
    </>
  )
}

export default PrivateRoute

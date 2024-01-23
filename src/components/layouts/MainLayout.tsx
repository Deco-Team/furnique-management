import { Container } from '@mui/material'
import { ILayoutProps } from '~/global/interface'

const MainLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Container maxWidth='lg'>{children}</Container>
    </>
  )
}

export default MainLayout

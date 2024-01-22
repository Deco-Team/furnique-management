import { Container } from '@mui/material'
import { ILayout } from '~/global/interface'

const MainLayout = ({ children }: ILayout) => {
  return (
    <>
      <Container maxWidth='lg'>{children}</Container>
    </>
  )
}

export default MainLayout

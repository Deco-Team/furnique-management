import { ProductStatus } from '~/global/enum'
import { StatusDiv } from './StatusDiv.styled'

const StatusTextDiv = ({ status }: { status: string }) => {
  if (status === ProductStatus.ACTIVE) {
    return <StatusDiv active={true}>Hoạt Động</StatusDiv>
  }
  if (status === ProductStatus.OUT_OF_STOCK) {
    return <StatusDiv outOfStock={true}>Hết Hàng</StatusDiv>
  }

  return null
}

export default StatusTextDiv

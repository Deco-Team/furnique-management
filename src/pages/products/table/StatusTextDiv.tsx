import { ProductStatus } from '~/global/enum'
import { StatusDiv } from './StatusDiv.styled'

const StatusTextDiv = ({ status }: { status: string }) => {
  if (status === ProductStatus.OUT_OF_STOCK) {
    return <StatusDiv outOfStock>Out of stock</StatusDiv>
  }
  if (status === ProductStatus.PUBLISHED) {
    return <StatusDiv published>Published</StatusDiv>
  }
  if (status === ProductStatus.DRAFT) {
    return <StatusDiv draft>Draft</StatusDiv>
  }
  return null
}

export default StatusTextDiv

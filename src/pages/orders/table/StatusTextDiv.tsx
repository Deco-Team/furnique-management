import { OrderStatus } from '~/global/enum'
import { StatusDiv } from './StatusDiv.style'

const StatusTextDiv = ({ status }: { status: string }) => {
  if (status === OrderStatus.CANCELLED) {
    return <StatusDiv cancelled>Cancelled</StatusDiv>
  }
  if (status === OrderStatus.COMPLETED) {
    return <StatusDiv completed>Completed</StatusDiv>
  }
  if (status === OrderStatus.PROCESSING) {
    return <StatusDiv processing>Processing</StatusDiv>
  }
  if (status === OrderStatus.DELIVERING) {
    return <StatusDiv delivering>Delivering</StatusDiv>
  }
  return null
}

export default StatusTextDiv

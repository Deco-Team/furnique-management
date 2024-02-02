import { OrderStatus, TransactionStatus } from '~/global/enum'
import { StatusDiv } from './StatusDiv.style'

const StatusTextDiv = ({ status }: { status: string }) => {
  if (status === OrderStatus.CANCELED || status === TransactionStatus.CANCELED) {
    return <StatusDiv canceled>Đã Hủy</StatusDiv>
  }
  if (status === OrderStatus.COMPLETED) {
    return <StatusDiv completed>Hoàn Thành</StatusDiv>
  }
  if (status === OrderStatus.DELETED || status === TransactionStatus.DELETED) {
    return <StatusDiv deleted>Đã Xóa</StatusDiv>
  }
  if (status === OrderStatus.DELIVERING) {
    return <StatusDiv delivering>Đang Giao Hàng</StatusDiv>
  }
  if (status === OrderStatus.PENDING) {
    return <StatusDiv pending>Đang Xử Lý</StatusDiv>
  }
  if (status === OrderStatus.CONFIRMED) {
    return <StatusDiv confirmed>Đã Xác Nhận</StatusDiv>
  }
  if (status === TransactionStatus.DRAFT) {
    return <StatusDiv draft>Nháp</StatusDiv>
  }
  return null
}

export default StatusTextDiv

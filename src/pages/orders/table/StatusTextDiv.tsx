import { OrderStatus, TransactionStatus } from '~/global/enum'
import { StatusDiv } from './StatusDiv.style'

const StatusTextDiv = ({ status }: { status: string }) => {
  if (status === OrderStatus.CANCELED || status === TransactionStatus.CANCELED) {
    return <StatusDiv canceled={true}>Đã Hủy</StatusDiv>
  }
  if (status === TransactionStatus.ERROR) {
    return <StatusDiv canceled={true}>Lỗi</StatusDiv>
  }
  if (status === TransactionStatus.REFUNDED) {
    return <StatusDiv canceled={true}>Đã Hoàn Tiền</StatusDiv>
  }
  if (status === TransactionStatus.CAPTURED) {
    return <StatusDiv completed={true}>Ghi nhận</StatusDiv>
  }
  if (status === OrderStatus.COMPLETED) {
    return <StatusDiv completed={true}>Hoàn Thành</StatusDiv>
  }
  if (status === OrderStatus.DELETED || status === TransactionStatus.DELETED) {
    return <StatusDiv deleted={true}>Đã Xóa</StatusDiv>
  }
  if (status === OrderStatus.DELIVERING) {
    return <StatusDiv delivering={true}>Đang Giao Hàng</StatusDiv>
  }
  if (status === OrderStatus.PENDING) {
    return <StatusDiv pending={true}>Đang Xử Lý</StatusDiv>
  }
  if (status === OrderStatus.CONFIRMED) {
    return <StatusDiv confirmed={true}>Đã Xác Nhận</StatusDiv>
  }
  if (status === TransactionStatus.DRAFT) {
    return <StatusDiv draft={true}>Nháp</StatusDiv>
  }
  return null
}

export default StatusTextDiv

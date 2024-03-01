import { Priority, TaskStatus } from '~/global/enum'
import { StatusDiv } from './Chip.styled'

const Chip = ({ status }: { status: string }) => {
  switch (status) {
    case Priority.HIGH:
      return <StatusDiv danger={true}>Cao</StatusDiv>
    case Priority.MEDIUM:
      return <StatusDiv warning={true}>TB</StatusDiv>
    case Priority.LOW:
      return <StatusDiv primary={true}>Thấp</StatusDiv>
    case TaskStatus.COMPLETED:
      return <StatusDiv success={true}>Hoàn thành</StatusDiv>
    case TaskStatus.DELETED:
      return <StatusDiv danger={true}>Đã xóa</StatusDiv>
    case TaskStatus.IN_PROGRESS:
      return <StatusDiv warning={true}>Đang xử lý</StatusDiv>
    case TaskStatus.PENDING:
      return <StatusDiv primary={true}>Đang chờ</StatusDiv>
    default:
      break
  }
}

export default Chip

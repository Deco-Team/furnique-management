import { string, object } from 'yup'
export const deliveryValidationSchema = object().shape({
  title: string().trim().required('Tiêu đề là bắt buộc'),
  description: string().trim().required('Mô tả là bắt buộc'),
  startDate: string().trim().required('Ngày bắt đầu là bắt buộc'),
  dueDate: string().trim().required('Ngày kết thúc là bắt buộc'),
  priority: string().trim().required('Độ ưu tiên là bắt buộc'),
  assigneeId: string().trim().required('Tên nhân viên là bắt buộc')
})

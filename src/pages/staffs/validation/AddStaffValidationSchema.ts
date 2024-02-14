import { object, string } from 'yup'
export const addStaffValidationSchema = object().shape({
  lastName: string().trim().required('Họ là bắt buộc'),
  firstName: string().trim().required('Tên là bắt buộc'),
  staffCode: string().trim().required('Mã nhân viên là bắt buộc'),
  phone: string()
    .trim()
    .required('Số điện thoại là bắt buộc')
    .matches(/^\d{10}$/, 'Số điện thoại phải có 10 ký tự, bắt đầu bằng 0'),
  email: string().trim().required('Email là bắt buộc').email('Email không hợp lệ')
})

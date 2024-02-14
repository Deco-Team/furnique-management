import * as Yup from 'yup'

export const reasonSchema = Yup.object().shape({
  reason: Yup.string()
    .required('Lý do hủy đơn hàng không thể để trống')
    .min(10, 'Lý do hủy đơn hàng phải có ít nhất 10 ký tự')
})

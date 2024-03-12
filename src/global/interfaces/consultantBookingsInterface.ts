import { IStaff } from './tasksInterface'

export interface IConsultantBookingRows {
  id: string
  consultant: string
  customer: string
  bookingDate: string
  bookingStatus: string
}

export interface IConsultantBookingsProps {
  _id: string
  bookingDate: string
  bookingStatus: string
  consultant: IStaff
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
  }
  note: string
  interestedCategories: string[]
}

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
  notes: string
  interestedCategories: {
    _id: string
    name: string
    description: string
    image: string
  }[]
}

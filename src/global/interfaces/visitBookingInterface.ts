export interface IVisitBookingRows {
  id: string
  customer: string
  bookingDate: string
  bookingStatus: string
}

export interface IVisitBookingProps {
  _id: string
  bookingDate: string
  bookingStatus: string
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

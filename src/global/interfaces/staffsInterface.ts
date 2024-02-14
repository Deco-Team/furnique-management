export interface IStaffsRequest {
  firstName: string
  lastName: string
  staffCode: string
  phone: string
  avatar?: string
  email: string
  role?: string
}

export interface IStaffRows {
  _id: string
  firstName: string
  lastName: string
  email: string
  staffCode: string
  phone: string
  avatar: string
  role: string
  status: string
  createdAt: string
  updatedAt: string
  providerId: string
}

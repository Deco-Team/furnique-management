export interface ITaskRows {
  id: string
  title: string
  assignee: string
}

export interface IStaff {
  _id: string
  firstName: string
  lastName: string
  email: string
  staffCode: string
  phone: string
  avatar: string
  role: string
  status: string
  providerId: string
  createdBy: string
}

export interface ITasksProps {
  _id?: string
  title: string
  description: string
  startDate: string
  dueDate: string
  completionDate: string
  type: string
  priority: string
  status: string
  reporter: IStaff
  assignee: IStaff
}

export interface ITaskStatusProps {
  primary?: boolean
  secondary?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
}

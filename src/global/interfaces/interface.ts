/* eslint-disable @typescript-eslint/no-explicit-any */
import { SxProps } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import React, { ReactNode } from 'react'
import { Control } from 'react-hook-form'
import { ILoginFormProps } from '~/pages/auth/types/LoginForm'

export interface ILayoutProps {
  children: ReactNode
  title?: string
}

export interface IFormInputProps {
  name: string
  label?: string
  control: Control<any>
  error?: string
  type?: 'password' | 'date' | 'checkbox' | 'radio' | 'email' | 'hidden' | 'number'
  sx?: SxProps
  variant: 'outlined' | 'standard'
  multiline?: boolean
  rows?: number
}

export interface ICustomButtonProps {
  variant: 'contained' | 'outlined'
  name: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: React.ReactNode
  sx?: SxProps
  type: 'button' | 'submit' | 'reset'
}

export interface IUserInfoProps {
  id: string
  staffCode: string
  email: string
  password: string
  avatar: string
  role: string
  firstName: string
  lastName: string
}

export interface IAuthProviderProps {
  children: ReactNode
}
export interface IAuthContextProps {
  user: IUserInfoProps | undefined
  idToken: string | null
  login: ({ email, password }: ILoginFormProps) => Promise<void>
  logout: () => Promise<void>
  refreshToken: () => Promise<void>
}

export interface IMainLayoutProps {
  Component: React.ComponentType
}

export interface ISidebarProps {
  mainContainerRef: React.RefObject<HTMLDivElement>
}

export interface IDataTableProps {
  rows: any[]
  columns: GridColDef[]
}

export interface IStatusCategoriesProps {
  outOfStock?: boolean
  published?: boolean
  draft?: boolean
}

export interface IStatusProductProps {
  outOfStock?: boolean
  published?: boolean
  draft?: boolean
}

export interface IStatusOrderProps {
  processing?: boolean
  delivering?: boolean
  cancelled?: boolean
  completed?: boolean
}

export interface ICategoriesProps {
  _id: string
  image?: string
  categoryName: string
  description: string
}

export interface IUploadFileButtonProps {
  onFileChange: (fileUrl: string | null) => void
}

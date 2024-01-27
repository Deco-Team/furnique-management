/* eslint-disable @typescript-eslint/no-explicit-any */
import { SxProps } from '@mui/material'
import { GridColDef } from '@mui/x-data-grid'
import React, { ReactNode } from 'react'
import { Control } from 'react-hook-form'

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
}

export interface ICustomButtonProps {
  variant: 'contained' | 'outlined'
  name: string
  onClick?: () => void
  icon?: React.ReactNode
  sx?: SxProps
  type: 'submit' | 'reset'
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
  login: () => Promise<void>
  logout: () => Promise<void>
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

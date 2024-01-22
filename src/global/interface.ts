/* eslint-disable @typescript-eslint/no-explicit-any */
import { SxProps } from '@mui/material'
import { ReactNode } from 'react'

export interface ILayout {
  children: ReactNode
  title?: string
}

export interface IFormInputProps {
  name: string
  label?: string
  control: object
}

export interface ICustomButtonProps {
  variant: 'contained' | 'outlined'
  name: string
  onClick?: () => void
  icon?: React.ReactNode
  sx?: SxProps
}

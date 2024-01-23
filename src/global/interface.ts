/* eslint-disable @typescript-eslint/no-explicit-any */
import { SxProps } from '@mui/material'
import { ReactNode } from 'react'
import { Control } from 'react-hook-form'

export interface ILayout {
  children: ReactNode
  title?: string
}

export interface IFormInputProps {
  name: string
  label?: string
  control: Control<any>
  error?: string
}

export interface ICustomButtonProps {
  variant: 'contained' | 'outlined'
  name: string
  onClick?: () => void
  icon?: React.ReactNode
  sx?: SxProps
  type: 'submit' | 'reset'
}

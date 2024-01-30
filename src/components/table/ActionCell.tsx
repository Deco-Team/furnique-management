import React from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
  icon: React.ReactNode
  onClick: () => void
}

interface ActionsCellProps {
  id?: number
  buttons: ButtonProps[]
}

const ActionsCell: React.FC<ActionsCellProps> = ({ id, buttons }) => {
  return (
    <>
      {buttons.map((button, index) => (
        <Button
          key={index}
          aria-controls={`actions-menu-${id}`}
          aria-haspopup='true'
          onClick={button.onClick}
          startIcon={button.icon}
          size='large'
          sx={{
            minWidth: '30px',
            color: 'var(--black-color)',
            '.MuiTouchRipple-root': {
              width: 'fit-content'
            },
            '&:focus': {
              outline: 'none'
            }
          }}
        />
      ))}
    </>
  )
}

export default ActionsCell

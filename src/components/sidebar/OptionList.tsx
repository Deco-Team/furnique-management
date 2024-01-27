/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { optionsSidebar } from './Option'
import { Avatar, Image } from './Sidebar.styled'

interface SidebarProps {
  prop: React.RefObject<HTMLDivElement>
}

const OptionList: React.FC<SidebarProps> = ({ prop }) => {
  const [btn, setButton] = useState<number | null>(null) //dashboard is default option

  const handleClick = (id: number) => {
    setButton(id)
    if (prop.current) {
      prop.current.scrollTo(0, 0)
    }
  }

  const location = useLocation()
  useEffect(() => {
    const option = optionsSidebar.find((option) => location.pathname.includes(`/${option.link}`))
    if (option) {
      setButton(option.id)
    } else {
      setButton(null)
    }
  }, [optionsSidebar])

  return (
    <>
      <Avatar>
        <Image src='/assets/Logo.svg' alt='Logo' />
      </Avatar>
      {optionsSidebar.map((option) => (
        <Link
          key={option.id}
          to={`/${option.link}`}
          style={{
            width: '100%',
            minHeight: 'fit-content'
          }}
        >
          <Button
            onClick={() => handleClick(option.id)}
            sx={{
              width: '100%',
              height: '100%',
              color: option.id === btn ? 'var(--white-color)' : 'var(--black-light-color)',
              borderRadius: 0,
              padding: '5% 10%',
              justifyContent: 'flex-start',
              textTransform: 'none',
              fontFamily: 'inherit'
            }}
            startIcon={React.createElement(option.icon)}
            variant={option.id === btn ? 'contained' : 'text'}
          >
            {option.text}
          </Button>
        </Link>
      ))}
    </>
  )
}

export default OptionList
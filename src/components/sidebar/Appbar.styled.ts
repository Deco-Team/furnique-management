import { IconButton } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { alpha, styled } from '@mui/material/styles'

export const ProfileButton = styled(IconButton)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10%',
  '&:focus': {
    outline: 'none'
  },
  '& div': {
    marginLeft: '10px',
    textAlign: 'left',
    '& h4': {
      margin: 0,
      fontSize: '0.8rem'
    }
  }
}))

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  color: 'var(--gray-color)'
}))

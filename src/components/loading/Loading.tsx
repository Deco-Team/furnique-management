import { Box, CircularProgress } from '@mui/material'

const Loading = () => {
  return (
    <Box sx={{ display: 'flex', height: '80vh', width: '85vw' }} justifyContent='center' alignItems='center'>
      <CircularProgress size={80} />
    </Box>
  )
}

export default Loading

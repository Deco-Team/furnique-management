import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

const HorizontalCard = () => {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component='img'
        sx={{ width: 151 }}
        image='/static/images/cards/live-from-space.jpg'
        alt='Live from space album cover'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component='div' variant='h5'>
            Live From Space
          </Typography>
          <Typography variant='subtitle1' color='text.secondary' component='div'>
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
    </Card>
  )
}

export default HorizontalCard

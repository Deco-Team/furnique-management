import { Box, Card, CardContent, Typography } from '@mui/material'

const CardProduct = ({ product }: { product: string }) => {
  return (
    <>
      <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent
            sx={{
              flex: '1 0 auto',
              '&:last-child': {
                paddingBottom: '15px'
              },
              padding: '16px 16px 16px 0'
            }}
          >
            <Typography component='div'>{product}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  )
}

export default CardProduct

import { Backdrop, Box, Fade, Modal, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import AgreeButton from '~/components/button/AgreeButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import { ScreenPath } from '~/global/enum'
import { OrderModalProps } from '~/global/interfaces/ordersInterface'
import { notifyError, notifySuccess } from '~/global/toastify'
import useOrdersApi from '~/hooks/api/useOrdersApi'

const ConfirmOrderModal = ({ open, handleClose, orderId }: OrderModalProps) => {
  const { confirmOrder } = useOrdersApi()
  const navigate = useNavigate()
  const style = {
    position: 'absolute',
    borderRadius: '5px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4
  }
  const handleConfirmButton = async (orderId: string) => {
    try {
      confirmOrder(orderId)
      notifySuccess('Xác nhận đơn hàng thành công')
      navigate(ScreenPath.ORDERS)
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    } finally {
      handleClose()
    }
  }
  const handleBackButton = () => {
    handleClose()
  }
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500
        }
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography id='transition-modal-title' variant='h6' component='h2' sx={{ marginBottom: '20px' }}>
            Bạn có chắc chắn muốn xác nhận đơn hàng này?
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <SecondaryButton
              variant='contained'
              name='Hủy'
              color='var(--gray-light-color)'
              onClick={handleBackButton}
              type='button'
            />
            <AgreeButton variant='outlined' name='Đồng ý' type='button' onClick={() => handleConfirmButton(orderId)} />
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}

export default ConfirmOrderModal

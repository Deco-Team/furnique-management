import { CalendarMonth } from '@mui/icons-material'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import ReceiptIcon from '@mui/icons-material/Receipt'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CustomButton from '~/components/button/CustomButton'
import Loading from '~/components/loading/Loading'
import { EMPTY } from '~/global/constants/constants'
import { IOrder } from '~/global/interfaces/ordersInterface'
import { notifyError } from '~/global/toastify'
import useOrdersApi from '~/hooks/api/useOrdersApi'
import { TitleText } from '~/pages/categories/addCategory/AddCategory.styled'
import StatusTextDiv from '../table/StatusTextDiv'
import PersonIcon from '@mui/icons-material/Person'
import EmailIcon from '@mui/icons-material/Email'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import {
  CustomerInformation,
  IconWrapper,
  ListContent,
  OrderContent,
  OrderInformation,
  OrderList,
  OrderStatus,
  ShippingInformation,
  TextHeader,
  TextWrapper,
  TitleWrapper,
  Wrapper
} from './ViewOrderDetail.styled'

const ViewOrderDetail = () => {
  const params = useParams()
  const orderId = params.orderId
  const { getOrderById } = useOrdersApi()
  const [isLoading, setIsLoading] = useState(false)
  const [orderData, setOrderData] = useState<IOrder>()

  useEffect(() => {
    if (orderId) {
      getOrderDetail(orderId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getOrderDetail = async (orderId: string) => {
    try {
      setIsLoading(true)
      const orderDetailData = await getOrderById(orderId)
      setOrderData(orderDetailData)
    } catch (error) {
      notifyError('Có lỗi xảy ra')
    } finally {
      setIsLoading(false)
    }
  }

  const hanldeOrderNumber = (orderId: string) => {
    return orderId.slice(-6)
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <OrderInformation>
            <OrderContent>
              <TitleWrapper>
                <TitleText>Đơn hàng #{orderData && hanldeOrderNumber(orderData?._id)}</TitleText>
                <div>
                  <CustomButton
                    variant='contained'
                    name='Hủy'
                    type='button'
                    sx={{
                      color: 'var(--red-color)',
                      backgroundColor: 'var(--red-light-color)',
                      height: '30px',
                      ':hover': {
                        backgroundColor: 'var(--red-color)',
                        color: 'var(--white-color)'
                      },
                      marginRight: '10px'
                    }}
                  />
                  <CustomButton
                    variant='contained'
                    name='Xác nhận'
                    type='button'
                    sx={{
                      color: 'var(--green-color)',
                      backgroundColor: 'var(--green-light-color)',
                      height: '30px',
                      ':hover': {
                        backgroundColor: 'var(--green-color)',
                        color: 'var(--white-color)'
                      }
                    }}
                  />
                </div>
              </TitleWrapper>
              <TextWrapper>
                <TextHeader>
                  <IconWrapper>
                    <CalendarMonth sx={{ color: 'var(--primary-color)' }} />
                  </IconWrapper>
                  <strong>Ngày tạo</strong>
                </TextHeader>
                {dayjs(orderData?.orderDate).format('hh:mm:ss DD/MM/YYYY')}
              </TextWrapper>
              <TextWrapper>
                <TextHeader>
                  <IconWrapper>
                    <LocalMallIcon sx={{ color: 'var(--primary-color)' }} />
                  </IconWrapper>
                  <strong>Trạng thái đơn hàng</strong>
                </TextHeader>
                <StatusTextDiv status={orderData?.orderStatus || EMPTY} />
              </TextWrapper>
              <TextWrapper>
                <TextHeader>
                  <IconWrapper>
                    <ReceiptIcon sx={{ color: 'var(--primary-color)' }} />
                  </IconWrapper>
                  <strong>Trạng thái giao dịch</strong>
                </TextHeader>
                <StatusTextDiv status={orderData?.transactionStatus || EMPTY} />
              </TextWrapper>
            </OrderContent>
            <CustomerInformation>
              <TitleText>Khách hàng</TitleText>
              <TextWrapper>
                <TextHeader>
                  <IconWrapper>
                    <PersonIcon sx={{ color: 'var(--primary-color)' }} />
                  </IconWrapper>
                  <strong>Họ tên</strong>
                </TextHeader>
                {`${orderData?.customer.firstName} ${orderData?.customer.lastName}`}
              </TextWrapper>
              <TextWrapper>
                <TextHeader>
                  <IconWrapper>
                    <EmailIcon sx={{ color: 'var(--primary-color)' }} />
                  </IconWrapper>
                  <strong>Email</strong>
                </TextHeader>
                {orderData?.customer.email}
              </TextWrapper>
              <TextWrapper>
                <TextHeader>
                  <IconWrapper>
                    <ContactPhoneIcon sx={{ color: 'var(--primary-color)' }} />
                  </IconWrapper>
                  <strong>Điện thoại</strong>
                </TextHeader>
                {orderData?.customer.phone}
              </TextWrapper>
            </CustomerInformation>
            <ShippingInformation>
              <TitleText>Giao hàng</TitleText>
              <TextWrapper>
                <IconWrapper>
                  <LocationOnIcon sx={{ color: 'var(--primary-color)' }} />
                </IconWrapper>
                <div style={{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 40px)' }}>
                  <strong>Địa chỉ giao hàng</strong>
                  Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, TP.Thủ Đức, TP.Hồ Chí Minh
                </div>
              </TextWrapper>
              <TextWrapper>
                <IconWrapper>
                  <LocationOnIcon sx={{ color: 'var(--primary-color)' }} />
                </IconWrapper>
                <div style={{ display: 'flex', flexDirection: 'column', width: 'calc(100% - 40px)' }}>
                  <strong>Địa chỉ nhận hàng</strong>
                  {orderData?.customer.shippingAddress}
                </div>
              </TextWrapper>
            </ShippingInformation>
          </OrderInformation>
          <OrderList>
            <ListContent>
              <TitleText>Danh sách đơn hàng</TitleText>
            </ListContent>
            <OrderStatus>
              <TitleText>Trạng thái đơn hàng</TitleText>
            </OrderStatus>
          </OrderList>
        </Wrapper>
      )}
    </>
  )
}

export default ViewOrderDetail

/* eslint-disable react-hooks/exhaustive-deps */
import { CalendarMonth } from '@mui/icons-material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import EmailIcon from '@mui/icons-material/Email'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PersonIcon from '@mui/icons-material/Person'
import ReceiptIcon from '@mui/icons-material/Receipt'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AgreeButton from '~/components/button/AgreeButton'
import CancelButton from '~/components/button/CancelButton'
import SecondaryButton from '~/components/button/SecondaryButton'
import Loading from '~/components/loading/Loading'
import { EMPTY } from '~/global/constants/constants'
import { OrderStatus, ScreenPath } from '~/global/enum'
import { IOrder } from '~/global/interfaces/ordersInterface'
import { notifyError } from '~/global/toastify'
import useOrdersApi from '~/hooks/api/useOrdersApi'
import { ButtonWrapper, TitleText } from '~/pages/categories/addCategory/AddCategory.styled'
import CancelOrderModal from '../components/CancelOrderModal'
import ConfirmOrderModal from '../components/ConfirmOrderModal'
import OrderListTable from '../table/OrderListTable'
import StatusTextDiv from '../table/StatusTextDiv'
import {
  CustomerInformation,
  IconWrapper,
  ListContent,
  NoteInformation,
  NoteWrapper,
  OrderContent,
  OrderInformation,
  OrderList,
  ShippingInformation,
  TextHeader,
  TextWrapper,
  TitleWrapper,
  TotalWrapper,
  Wrapper
} from './ViewOrderDetail.styled'
import CreateDeliveryModal from '~/pages/delivery/modal/CreateDeliveryModal'
import useStaffsApi from '~/hooks/api/useStaffsApi'
import { IUserInfoProps } from '~/global/interfaces/interface'

const ViewOrderDetail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const orderId = params.orderId
  const { getOrderById } = useOrdersApi()
  const { getDeliveryStaffs } = useStaffsApi()
  const [isLoading, setIsLoading] = useState(false)
  const [orderData, setOrderData] = useState<IOrder>()
  const [deliveryStaffList, setDeliveryStaffList] = useState<
    {
      id: string
      label: string
    }[]
  >([])
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false)
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  useEffect(() => {
    if (orderId) {
      getOrderDetail(orderId)
    }
  }, [])
  useEffect(() => {
    getDeliveryStaffList()
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

  const getDeliveryStaffList = async () => {
    try {
      setIsLoading(true)
      const staffList = await getDeliveryStaffs()
      const data = staffList.docs.map((value: IUserInfoProps) => {
        return {
          id: value._id,
          label: `${value.firstName} ${value.lastName}`
        }
      })
      setDeliveryStaffList(data)
    } catch (error) {
      notifyError('Có lỗi xảy ra!!!')
    } finally {
      setIsLoading(false)
    }
  }

  const handleOrderNumber = (orderId: string) => {
    return orderId.slice(-6)
  }
  const handleCancelButton = () => {
    setIsCancelModalOpen(true)
  }
  const handleClose = () => {
    setIsCancelModalOpen(false)
    setIsConfirmModalOpen(false)
  }
  const handleConfirmButton = () => {
    setIsConfirmModalOpen(true)
  }
  const handleBackButton = () => {
    navigate(ScreenPath.ORDERS)
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <ButtonWrapper>
            {orderData?.orderStatus === OrderStatus.CONFIRMED ? (
              <CreateDeliveryModal orderId={orderData._id} deliveryStaffList={deliveryStaffList} />
            ) : null}
            <SecondaryButton
              variant='contained'
              name='Trở về'
              color='var(--gray-light-color)'
              icon={<ArrowBackIcon />}
              onClick={handleBackButton}
              type='button'
            />
          </ButtonWrapper>
          <OrderInformation>
            <OrderContent>
              <TitleWrapper>
                <TitleText>Đơn hàng #{orderData && handleOrderNumber(orderData?._id)}</TitleText>
                <div>
                  <CancelButton
                    variant='contained'
                    name='Hủy'
                    type='button'
                    sx={{ height: '30px', marginRight: '10px' }}
                    onClick={handleCancelButton}
                    disable={orderData?.orderStatus === OrderStatus.CANCELED}
                  />
                  <AgreeButton
                    variant='contained'
                    name='Xác nhận'
                    type='button'
                    sx={{ height: '30px', marginRight: '10px' }}
                    onClick={handleConfirmButton}
                    disable={
                      orderData?.orderStatus === OrderStatus.CANCELED ||
                      orderData?.orderStatus === OrderStatus.CONFIRMED
                    }
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
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <OrderListTable />
                <TotalWrapper>
                  <TextWrapper>
                    <strong>Tổng cộng</strong>
                    <strong>{orderData?.totalAmount} VND</strong>
                  </TextWrapper>
                </TotalWrapper>
              </div>
            </ListContent>
            <NoteWrapper>
              <NoteInformation>
                <TitleText>Lưu ý</TitleText>
                <TextWrapper> {orderData?.notes}</TextWrapper>
              </NoteInformation>
              {orderData?.orderStatus === OrderStatus.CANCELED && (
                <NoteInformation>
                  <TitleText>Lý do hủy đơn</TitleText>
                  <TextWrapper> {orderData?.reason}</TextWrapper>
                </NoteInformation>
              )}
            </NoteWrapper>
          </OrderList>
          {orderId && (
            <>
              <CancelOrderModal open={isCancelModalOpen} orderId={orderId} handleClose={handleClose} />
              <ConfirmOrderModal open={isConfirmModalOpen} handleClose={handleClose} orderId={orderId} />
            </>
          )}
        </Wrapper>
      )}
    </>
  )
}

export default ViewOrderDetail

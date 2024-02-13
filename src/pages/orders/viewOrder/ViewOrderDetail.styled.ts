import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 1rem;
  justify-content: space-between;
`
export const OrderInformation = styled.div`
  display: flex;
  height: 15rem;
  justify-content: space-between;
`
export const OrderContent = styled.div`
  width: 36%;
  background-color: var(--white-color);
`

export const CustomerInformation = styled.div`
  width: 30%;
  background-color: var(--white-color);
`

export const ShippingInformation = styled.div`
  width: 30%;
  background-color: var(--white-color);
`

export const OrderList = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
`

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;
  padding-bottom: 10px;
`

export const TextHeader = styled.div`
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary-light-color);
  margin-right: 10px;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`

export const ListContent = styled.div`
  width: 68%;
  background-color: var(--white-color);
`

export const OrderStatus = styled.div`
  width: 30%;
  background-color: var(--white-color);
`

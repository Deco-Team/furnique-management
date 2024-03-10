import styled from 'styled-components'
import { TextWrapper } from '../orders/viewOrder/ViewOrderDetail.styled'

export const AnalyticsWrapper = styled.div`
  display: flex;
`

export const ChartWrapper = styled.div`
  width: 68%;
  border-radius: 10px;
  background-color: var(--white-color);
  margin: 20px 20px 0 20px;
  padding: 24px;
  height: calc(100vh - 420px);
`

export const DailyWrapper = styled.div`
  width: 28%;
  border-radius: 10px;
  margin: 20px 20px 0 0;
  padding: 24px;
  background-color: var(--white-color);
`

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DailyCardWrapper = styled(TextWrapper)`
  margin: 30px 0 0 0;
  border-bottom: 2px solid var(--gray-light-color);
  padding-bottom: 30px;
  &.last-daily-card {
    border-bottom: none;
  }
`

import styled from 'styled-components'
import { IStatusProductProps } from '~/global/interfaces/interface'

export const StatusDiv = styled.div<IStatusProductProps>`
  width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 15px;
  font-weight: 500;
  ${({ active }) =>
    active &&
    `
    background-color: var(--green-light-color);
    color: var(--green-color)
    `};
  ${({ outOfStock }) =>
    outOfStock &&
    `
    background-color: var(--red-light-color);
    color: var(--red-color)
    `};
`

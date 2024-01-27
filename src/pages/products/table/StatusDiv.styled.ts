import styled from 'styled-components'
import { IStatusProductProps } from '~/global/interface'

export const StatusDiv = styled.div<IStatusProductProps>`
  width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 15px;
  font-weight: 500;
  ${({ outOfStock }) =>
    outOfStock &&
    `
    background-color: var(--red-light-color);
    color: var(--red-color)
    `};
  ${({ published }) =>
    published &&
    `
    background-color: var(--green-light-color);
    color: var(--green-color)
  `}
  ${({ draft }) =>
    draft &&
    `
    background-color: var(--gray-light-color);
    color: var(--gray-color)
  `}
`

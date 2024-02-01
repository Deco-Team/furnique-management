import styled from 'styled-components'
import { IStatusOrderProps } from '~/global/interfaces/interface'

export const StatusDiv = styled.div<IStatusOrderProps>`
  width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 5px 15px;
  font-weight: 500;
  ${({ cancelled }) =>
    cancelled &&
    `
    background-color: var(--red-light-color);
    color: var(--red-color)
    `};
  ${({ completed }) =>
    completed &&
    `
    background-color: var(--green-light-color);
    color: var(--green-color)
  `}
  ${({ processing }) =>
    processing &&
    `
    background-color: var(--primary-light-color);
    color: var(--primary-color)
  `}
   ${({ delivering }) =>
    delivering &&
    `
    background-color: var(--blue-light-color);
    color: var(--blue-color)
  `}
`

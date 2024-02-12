import styled from 'styled-components'
import { ThumbnailContainer } from '../addCategory/AddCategory.styled'
import { Typography } from '@mui/material'
export const DetailThumbnailContainer = styled(ThumbnailContainer)`
  display: flex;
  flex-direction: column;
`
export const Image = styled.img`
  align-self: center;
  width: 90%;
  aspect-ratio: 1/1;
  overflow: hidden;
  object-fit: scale-down;
`
export const ContentWrapper = styled.div`
  margin: 0.5rem 1rem;
`
export const Text = styled(Typography)`
  padding: 10px;
`

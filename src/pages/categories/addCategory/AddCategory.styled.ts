import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0.25rem 1rem;
`

export const ThumbnailContainer = styled.div`
  width: 25%;
  height: 20rem;
  padding: 10px;
  background-color: var(--white-color);
  border-radius: 10px;
`

export const InformationContainer = styled.div`
  width: 70%;
  height: 20rem;
  padding: 10px;
  background-color: var(--white-color);
  border-radius: 10px;
`

export const TitleText = styled.h3`
  font-weight: 600;
  padding-left: 20px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.25rem;
`

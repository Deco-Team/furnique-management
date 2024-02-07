import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0.25rem 1rem;
  overflow-x: hidden;
  overflow-y: auto;
`

export const CategoryContainer = styled.div`
  width: 25%;
  height: fit-content;
  background-color: var(--white-color);
  border-radius: 10px;
  padding: 0 0 20px 20px;
`

export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`

export const InformationContainer = styled.div`
  height: max-content;
  background-color: var(--white-color);
  border-radius: 10px;
  margin-bottom: 1rem;
`

export const TitleText = styled.h2`
  font-weight: 700;
  padding-left: 20px;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 0.25rem;
`

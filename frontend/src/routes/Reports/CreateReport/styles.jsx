import styled, { css } from 'styled-components'
import { StyledH2, StyledH3 } from '../../../styles/elements/typography'

export const TypeMenuUl = styled.ul`
  width: min-content;

  display: flex;
  justify-content: center;
  align-items: center;

  list-style-type: none;
  border-bottom: 1px solid var(--dark-gray);
`
export const TypesIcon = styled.img`
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease;
  ${(props) =>
    props.typeSelected &&
    css`
      transform: translateY(-20px);
      width: 2.4rem;
      height: 2.4rem;
    `}
`
export const MenuWrapper = styled.div`
  margin: 1rem;
  display: flex;
  gap: 3rem;
  justify-content: center;
`
export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  ${(props) =>
    props.typeSelected &&
    css`
      transform: translateY(-20px);
      font-size: 0.8rem;
    `}
`
export const QuestionWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StyledText = styled(StyledH3)`
  color: ${(props) => (props.selected ? 'var(--accent-main)' : 'black')};
  transition: all 0.3s ease;
  ${(props) =>
    props.typeSelected &&
    css`
      transform: translateY(-20px);
      font-size: 0.9rem;
    `}
`

export const Question = styled(StyledH2)`
  transition: all 0.3s ease;
  ${(props) =>
    props.typeSelected &&
    css`
      transform: translateY(-30px);
      font-size: 1.2rem;
    `}
`

export const FormsWrapper = styled.div`
  margin-top: 0.1rem;
`
export const SuccessMsg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: 1rem;
`

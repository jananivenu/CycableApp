import styled from 'styled-components'
import { QuestionWrapper } from '../../styles'

export const SelectorWrappen = styled.div`
  max-width: max-content;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const TransQuestionWrapper = styled(QuestionWrapper)`
  transition: transform 0.3s ease;
  transform: ${(props) =>
    props.isScaledDown ? 'scale(0.7) translateY(-50px)' : 'none'};
`

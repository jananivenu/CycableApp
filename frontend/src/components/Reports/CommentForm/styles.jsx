import styled from 'styled-components'
import { BasicForm } from '../../../styles/elements/forms'
import { SimpleButton } from '../../../styles/elements/buttons'

export const FormWrapper = styled.section`
    position: relative;
    height: fit-content;
    padding: 0 0 3rem 0;
    height: fit-content;
`
export const FormContainer = styled.div`
  position: relative;
  padding: 1rem 1rem 1rem 3rem;
  border-radius: 16px;
  background-color: var(--gray-100);

  overflow: hidden;
  transition: opacity 0.3s ease;
  display: block; 
  opacity: 0; 
  pointer-events: none; 

  height: 0;


  &.expanded {
    opacity: 1;
    pointer-events: auto; 
    height: fit-content;
  }

  &:focus-within,
  &:hover {
    background-color: var(--gray-300);
  }
`;

export const CloseButton = styled.button`
  position: absolute; 
  top: 0;
  left: 0;
  display: inline-block;
  aspect-ratio: 1/1;
  min-width: max-content;
  max-height: min-content;
  visibility: hidden; 

  cursor: pointer;
  color: var(--accent-main);

  background: none;
  border-radius: 16px;
  border: 3px solid transparent;
  padding: 0.3rem;

  font-size: 1.5rem;
  line-height: 1;

  &.visible {
    visibility: visible; 
  }
`;

export const CommentForm = styled(BasicForm)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

// export const CloseButton = styled(SimpleButton)`
//   align-self: flex-start;
//   display: inline-block;
//   aspect-ratio: 1/1;
//   min-width: max-content;
//   max-height: min-content;

//   background: none;
//   border-radius: 8px;
//   border: 0;
//   padding: 0.3rem;

//   font-size: 1.5rem;
//   line-height: 1;
// `

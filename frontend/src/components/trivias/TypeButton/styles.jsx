import styled from 'styled-components'

export const TypeMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  padding: 1rem;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: var(--gray-100);
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`

export const TypesIcon = styled.img`
  width: 2rem;
  height: 2rem;

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 480px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const TypeName = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`

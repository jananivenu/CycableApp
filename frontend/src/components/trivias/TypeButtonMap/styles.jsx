import styled from 'styled-components'

export const TypeMenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  padding: 0.5rem;
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
`

export const TypeName = styled.h4`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
`

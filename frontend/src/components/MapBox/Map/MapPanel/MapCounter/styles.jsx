import styled from 'styled-components'

export const MapCounterWrapper = styled.div`
  width: 100%;
  background-color: var(--gray-100);
  padding: 1rem;
  border-radius: 10px;

  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const MapCounterNumbers = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.8rem;

  padding: 1rem 0 0 0;
`

export const CounterLine = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;

`
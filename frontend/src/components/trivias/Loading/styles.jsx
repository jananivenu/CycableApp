import styled, { keyframes } from 'styled-components'

const marquee1 = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(100%); }
`

const marquee2 = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(200%); }
`

export const LoadingContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
  width: 100vw;
`

export const BikeWrapper = styled.div`
  display: inline-block;
  width: 100%;
  animation: ${(props) => (props.first ? marquee1 : marquee2)} 5s linear
    infinite;
  color: var(--accent-main);
`

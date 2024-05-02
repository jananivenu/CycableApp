import styled from 'styled-components'

export const MapPanelWrapper = styled.div`
  position: absolute;
  width: 280px;
  top: 0.6rem;
  left: 0.6rem;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  @media (max-width: 480px) {
    transition: transform 0.5s ease;
    transform: translateX(${(props) => (props.isExpanded ? '0' : '-274px')});
    cursor: pointer;
  }
`

export const CloseMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: min-content;
  border-radius: 10px;
  padding: 0.6rem;

  font-size: 1.2rem;
  cursor: pointer;

  background-color: white;
  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;

  @media (min-width: 480px) {
    display: none;
  }
`
export const OpenMenuButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 100%;
  cursor: pointer;
  background: transparent;

  @media (min-width: 480px) {
    display: none;
  }
`

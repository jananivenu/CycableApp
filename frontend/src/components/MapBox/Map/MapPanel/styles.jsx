import styled from 'styled-components'

export const MapPanelWrapper = styled.div`
  position: absolute;
  width: 280px;
  top: 0;
  left: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 0.6rem;

  @media (max-width: 480px) {
    transition: transform 0.5s ease;
    transform: translateX(${(props) => (props.isExpanded ? '0' : '-260px')});
    cursor: pointer;
  }
`

export const CloseMenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: min-content;
  border-radius: 5px;
  padding: 0.4rem;

  font-size: 1.3rem;
  cursor: pointer;

  background-color: white;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);

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

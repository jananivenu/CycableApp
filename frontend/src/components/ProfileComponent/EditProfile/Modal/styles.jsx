import styled from 'styled-components'

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const ModalStyle = styled.div`
  padding: 1.5rem;
  background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  min-width: 30%;
  max-width: 80%;
  z-index: 1001;
`;

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

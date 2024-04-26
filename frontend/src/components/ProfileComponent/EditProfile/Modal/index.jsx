import ReactDOM from 'react-dom'
import { IoClose } from 'react-icons/io5'
import { CloseButton, ModalStyle, OverlayStyle } from './styles'

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <OverlayStyle>
      <ModalStyle>
        <CloseButton onClick={onClose}>
          <IoClose />
        </CloseButton>
        {children}
      </ModalStyle>
    </OverlayStyle>,
    document.body,
  )
}

export default Modal

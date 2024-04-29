import ModalWindow from '../../../../../components/wrappers/Modal'
import ThankYouMessage from './ThankYouMessage'

const ThankYouModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <ModalWindow onClose={onClose}>
      <ThankYouMessage />
    </ModalWindow>
  )
}

export default ThankYouModal

import { IoClose } from 'react-icons/io5'
import { FaRegCommentDots } from 'react-icons/fa'
import { TiArrowBackOutline } from 'react-icons/ti'
import {
  CloseButton,
  CommentForm,
  CommentTextarea,
  FormContainer,
  FormWrapper,
  SendButton,
} from './styles'

const FormUI = ({
  showForm,
  inputText,
  onToggleClick,
  onInputChange,
  onSubmit,
}) => {
  return (
    <FormWrapper>
      <CloseButton
        onClick={onToggleClick}
        className={!showForm ? 'visible' : ''}
      >
        <FaRegCommentDots />
      </CloseButton>
      <FormContainer className={showForm ? 'expanded' : ''}>
        {showForm && (
          <CloseButton onClick={() => onToggleClick()} className="visible">
            <IoClose />
          </CloseButton>
        )}
        <CommentForm onSubmit={onSubmit}>
          <CommentTextarea
            value={inputText}
            onChange={onInputChange}
            placeholder="Enter text here"
          />

          <div>
            <SendButton
              type="submit"
              disabled={inputText.length < 10}
              title={
                inputText.length < 10
                  ? 'Please enter at least 10 characters to submit.'
                  : ''
              }
            >
              Send <TiArrowBackOutline />
            </SendButton>
          </div>
        </CommentForm>
      </FormContainer>
    </FormWrapper>
  )
}

export default FormUI

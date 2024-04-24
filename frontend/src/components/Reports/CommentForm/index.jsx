import { useState } from 'react'
import { InputGroup } from '../../../styles/elements/forms'
import { AccentButton, SimpleButton } from '../../../styles/elements/buttons'
import { CloseButton, CommentForm, FormContainer, FormWrapper } from './styles'
import { IoClose } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";



const ToggleInputForm = () => {
    const [showForm, setShowForm] = useState(false)
    const [inputText, setInputText] = useState('')
  
    const handleToggleClick = () => {
      setShowForm(!showForm)
    }
  
    const handleInputChange = (event) => {
      setInputText(event.target.value)
    }
  
    const handleSubmit = (event) => {
      event.preventDefault()
      alert(`Submitted: ${inputText}`)
      setInputText('')
      setShowForm(false)
    }
  
    return (
      <FormWrapper>
        <CloseButton onClick={handleToggleClick} className={!showForm ? 'visible' : ''}>
          <FaRegCommentDots />
        </CloseButton>
        <FormContainer className={showForm ? 'expanded' : ''}>
          {showForm && (
            <CloseButton onClick={() => setShowForm(false)} className="visible">
              <IoClose />
            </CloseButton>
          )}
  
          <CommentForm onSubmit={handleSubmit}>
            <InputGroup>
              <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter text here"
              />
            </InputGroup>
            <AccentButton type="submit">
              Send <span>🚀</span>
            </AccentButton>
          </CommentForm>
        </FormContainer>
      </FormWrapper>
    )
  }
  
  export default ToggleInputForm
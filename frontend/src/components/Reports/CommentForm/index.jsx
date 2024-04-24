import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addCommentAsync } from '../../../store/slices/commentsSlice'
import FormUI from './FormUI'

const ToggleInputForm = () => {
  const [showForm, setShowForm] = useState(false)
  const [inputText, setInputText] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()

  const { reportId } = useParams()

  const handleToggleClick = () => {
    setShowForm(!showForm)
    setError('')
  }

  const handleInputChange = (event) => {
    setInputText(event.target.value)
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!inputText.trim()) {
      setError('This field shouldn’t be empty.')
    } else {
      const commentData = { text: inputText }
      dispatch(addCommentAsync({ reportId, commentData }))
      setInputText('')
      setShowForm(false)
    }
  }

  return (
    <FormUI
      showForm={showForm}
      inputText={inputText}
      onToggleClick={handleToggleClick}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  )
}

export default ToggleInputForm

// import { useState } from 'react'
// import { InputGroup } from '../../../styles/elements/forms'
// import { AccentButton } from '../../../styles/elements/buttons'
// import { CloseButton, CommentForm, FormContainer, FormWrapper } from './styles'
// import { IoClose } from 'react-icons/io5'
// import { LuSend } from "react-icons/lu";

// import { FaRegCommentDots } from 'react-icons/fa'

// import { useDispatch } from 'react-redux'
// import { addCommentAsync } from '../../../store/slices/commentsSlice'
// import { useParams } from 'react-router-dom'

// const ToggleInputForm = () => {
//   const [showForm, setShowForm] = useState(false)
//   const [inputText, setInputText] = useState('')
//   const dispatch = useDispatch()

//   const { reportId } = useParams()

//   const handleToggleClick = () => {
//     console.log('report id → ' + reportId)
//     setShowForm(!showForm)
//   }

//   const handleInputChange = (event) => {
//     setInputText(event.target.value)
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     if (inputText.trim()) {
//       console.log(inputText)
//       console.log('report id → ' + reportId)

//       dispatch(addCommentAsync({ reportId, commentData: { text: inputText } }))
//     }
//     setInputText('')
//     setShowForm(false)
//   }

//   return (
//     <FormWrapper>
//       <CloseButton
//         onClick={handleToggleClick}
//         className={!showForm ? 'visible' : ''}
//       >
//         <FaRegCommentDots />
//       </CloseButton>
//       <FormContainer className={showForm ? 'expanded' : ''}>
//         {showForm && (
//           <CloseButton onClick={() => setShowForm(false)} className="visible">
//             <IoClose />
//           </CloseButton>
//         )}

//         <CommentForm onSubmit={handleSubmit}>
//           <InputGroup>
//             <textarea
//               value={inputText}
//               onChange={handleInputChange}
//               placeholder="Enter text here"
//             />
//           </InputGroup>
//           <AccentButton type="submit">
//             <LuSend />
//           </AccentButton>
//         </CommentForm>
//       </FormContainer>
//     </FormWrapper>
//   )
// }

// export default ToggleInputForm

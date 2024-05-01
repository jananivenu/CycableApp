import { useState } from 'react'
import { useDispatch } from 'react-redux'
import UserAxios, { UserRegistration } from '../../../axios'
import { useNavigate } from 'react-router-dom'
import {
  AuthForm,
  ErrorMessage,
  InputGroup,
  QuestionGroup,
} from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import { MainContainer, NarrowSectionContainer } from '../../../styles'
import { StyledH2 } from '../../../styles/elements/typography'
import { setEmail } from '../../../store/slices/userSlice'

const Registration = () => {
  const [email, setEmailState] = useState('')
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email)
    try {
      const response = await UserRegistration.post('/auth/registration/', {
        email: email,
      })

      if (response) {
        dispatch(setEmail(email))
        navigate('/verification')
      }
    } catch (error) {
      console.error(error)
      setError(true)
    }
  }

  return (
    <MainContainer>
      <NarrowSectionContainer>
        <StyledH2>Registration</StyledH2>

        <AuthForm onSubmit={handleSubmit}>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="email@email.com"
                value={email}
                onChange={(e) => setEmailState(e.target.value)}
                required
              />
            </InputGroup>
          </QuestionGroup>

          <AccentButton type="submit">Register</AccentButton>
          {error && (
            <ErrorMessage>
              The email is already used or not valid. Please try again...
            </ErrorMessage>
          )}
        </AuthForm>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default Registration

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import UserAxios, { UserRegistration } from '../../../axios'
import { useNavigate } from 'react-router-dom'
import {
  AuthForm,
  InputGroup,
  QuestionGroup,
} from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import { MainContainer, NarrowSectionContainer } from '../../../styles'
import { StyledH2 } from '../../../styles/elements/typography'

const Registration = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email)
    try {
      const response = await UserRegistration.post('/auth/registration/', {
        email: email,
      })

      if (response) {
        navigate('/verification')
      }
    } catch (error) {
      console.error(error)
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
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
          </QuestionGroup>

          <AccentButton type="submit">Register</AccentButton>
        </AuthForm>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default Registration

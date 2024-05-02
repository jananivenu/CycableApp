import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../../store/slices/userSlice'
import UserAxios from '../../../axios'
import { StyledH2, StyledLink } from '../../../styles/elements/typography'
import {
  AuthForm,
  InputGroup,
  QuestionGroup,
} from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import { MainContainer, NarrowSectionContainer } from '../../../styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {
      const response = await UserAxios.post('/auth/token/', {
        email: email,
        password: password,
      })
      if (response.data.access) {
        localStorage.setItem('token', response.data.access)
        dispatch(
          loginUser({
            user: response.data.user,
            accessToken: response.data.access,
          }),
        )
        navigate('/')
      } else {
        console.error('No accessToken in response:', response.data)
      }
    } catch (error) {
      console.error('Login API error:', error.response.data)
    }
  }

  return (
    <MainContainer>
      <NarrowSectionContainer>
        <StyledH2>Login</StyledH2>
        <AuthForm onSubmit={onSubmitHandler}>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="email@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="*******"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup>
          <AccentButton>Login</AccentButton>
        </AuthForm>
        <p>
          Not a user yet? Please{' '}
          <StyledLink to="/registration">register here</StyledLink>.
        </p>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default Login

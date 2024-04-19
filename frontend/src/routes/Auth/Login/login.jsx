import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login_user } from '../../../store/slices/userSlice'
import UserAxios from '../../../axios'
import { StyledH2 } from '../../../styles/elements/typography'
import { BasicForm } from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import { MainContainer } from '../../../styles'

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
      console.log(response)

      localStorage.setItem('token', response.data.access)
      dispatch(login_user(response.data.access))
      navigate('/')
    } catch (error) {
      console.error('Validation error:', error.response.data)
    }
  }

  return (
    <MainContainer>
      <StyledH2>LOGIN</StyledH2>
      <BasicForm onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <AccentButton>Login</AccentButton>
      </BasicForm>
    </MainContainer>
  )
}

export default Login

import { UserRegistration } from '../../../axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MainContainer, NarrowSectionContainer } from '../../../styles'
import { StyledH2 } from '../../../styles/elements/typography'
import {
  AuthForm,
  ErrorMessage,
  InputGroup,
  QuestionGroup,
} from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import ValidationCodeInput from './InputCode'

const Verification = () => {
  const emailReduxStore = useSelector((state) => state.user.user.email) //call eMail from the store
  console.log('email from store: ', emailReduxStore)
  // const [email, setEmail] = useState(emailReduxStore || '') // use email as initial value
  const [userName, setUserName] = useState('')
  const [validationCode, setValidationCode] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [genderUser, setGenderUser] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [errors, setErrors] = useState([])

  const navigate = useNavigate()

  const handleValidationCodeChange = (code) => {
    setValidationCode(code)
  }

  // const handleUserName = (e) => {
  //   try {
  //     setUserName(e.target.value)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors([])
    const newErrors = []
    if (password !== passwordRepeat) {
      // alert('Passwords do not match!')
      newErrors.push('Passwords do not match!')
    }
    if (!birthDate) {
      newErrors.push('Please enter your birth date!')
    }
    if (!genderUser) {
      newErrors.push('Please enter your gender!')
    }
    if (!password) {
      newErrors.push('Please enter a password!')
    }

    if (newErrors.length > 0) {
      setErrors(newErrors)
      return // Exit early if there are errors
    }

    try {
      await UserRegistration.patch('/auth/registration/validation/', {
        email: emailReduxStore,
        username: userName,
        code: validationCode,
        first_name: firstName,
        last_name: lastName,
        birth_date: birthDate,
        gender: genderUser,
        password: password,
        password_repeat: passwordRepeat,
      })
      navigate('/registration-message')
    } catch (error) {
      console.error('Validation error:', error.response.data)
      setErrors(['This username is taken, please try again..'])
    }
  }

  return (
    <MainContainer>
      <NarrowSectionContainer>
        <StyledH2>Verification</StyledH2>
        <AuthForm onSubmit={handleSubmit}>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="email">Email:</label>
              <input id="email" type="email" value={emailReduxStore} readOnly />
            </InputGroup>
          </QuestionGroup>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                // onChange={handleUserName}
              />
            </InputGroup>
          </QuestionGroup>

          <ValidationCodeInput onCodeChange={handleValidationCodeChange} />

          {/* <QuestionGroup>
            <InputGroup>
              <label htmlFor="vcode">Validation Code:</label>
              <input
                id="vcode"
                type="text"
                value={validationCode}
                onChange={(e) => setValidationCode(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup> */}
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="firstname">First Name:</label>
              <input
                id="firstname"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="lastname">Last Name:</label>
              <input
                id="lastname"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="birthday">Birth Date:</label>
              <input
                id="birthday"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]} // restricts selection of future dates
              />
            </InputGroup>
          </QuestionGroup>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                value={genderUser}
                onChange={(e) => setGenderUser(e.target.value)}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="D">Diverse</option>
                <option value="N">Prefer not to say</option>
              </select>
            </InputGroup>
          </QuestionGroup>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="repeatpassword">Repeat Password:</label>
              <input
                id="repeatpassword"
                type="password"
                value={passwordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup>
          <AccentButton type="submit">Submit</AccentButton>
          {errors.length > 0 && (
            <ErrorMessage>
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </ErrorMessage>
          )}
        </AuthForm>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default Verification

import { UserRegistration } from '../../../axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MainContainer, NarrowSectionContainer } from '../../../styles'
import { StyledH2 } from '../../../styles/elements/typography'
import { BasicForm } from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'

const Verification = () => {
  const emailReduxStore = useSelector((state) => state.user.email) //call eMail from the store
  const [email, setEmail] = useState(emailReduxStore || '') // use email as initial value
  const [userName, setUserName] = useState('')
  const [validationCode, setValidationCode] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [genderUser, setGenderUser] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== passwordRepeat) {
      alert('Passwords do not match!')
      return
    }

    try {
      await UserRegistration.patch('/auth/registration/validation/', {
        email: email,
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
    }
  }

  return (
    <MainContainer>
      <NarrowSectionContainer>
        <StyledH2>Verification Page</StyledH2>
        <BasicForm onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Username:</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Validation Code:</label>
          <input
            type="text"
            value={validationCode}
            onChange={(e) => setValidationCode(e.target.value)}
          />
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label>Birth Date:</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]} // restricts selection of future dates
          />
          <label>Gender:</label>
          <select
            value={genderUser}
            onChange={(e) => setGenderUser(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            <option value="N">NA</option>
            <option value="D">Diverse</option>
          </select>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Repeat Password:</label>
          <input
            type="password"
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
          <AccentButton type="submit">Submit</AccentButton>
        </BasicForm>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default Verification

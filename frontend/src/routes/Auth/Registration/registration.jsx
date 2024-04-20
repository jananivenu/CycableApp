import { useState } from 'react'
import { useDispatch } from 'react-redux'
import UserAxios, { UserRegistration } from '../../../axios'
import { useNavigate } from 'react-router-dom'
import { BasicForm } from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import { MainContainer, NarrowSectionContainer } from '../../../styles'

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
        //navigate to next step
        navigate('/verification')
        //add root for next step
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <MainContainer>
      <NarrowSectionContainer>
        <BasicForm onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <AccentButton type="submit">Register</AccentButton>
        </BasicForm>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default Registration

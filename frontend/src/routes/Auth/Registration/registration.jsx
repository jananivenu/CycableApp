import { useState } from 'react'
import { useDispatch } from 'react-redux'
import UserAxios, { UserRegistration } from '../../../axios'
import { set_user_email } from '../../../store/slices/userSlice'
import RegistrationMessage from './RegistrationMessage/message'
import { useNavigate } from 'react-router-dom'

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

      console.log('🚀 ~ handleSubmit ~ response:', response)

      if (response) {
        console.log(response)
        //navigate to next step
        navigate('/registration-message')
        //add root for next step
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Register</button>
      </form>
    
  )
}

export default Registration

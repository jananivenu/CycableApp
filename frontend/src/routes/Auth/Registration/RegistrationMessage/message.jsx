import { useNavigate } from 'react-router-dom'

const RegistrationMessage = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/verification') // Redirect to the verification page
  }

  return (
    <div>
      <h2>Registration Successful!</h2>
      <p>Thank you for registering.</p>
      <button onClick={handleRedirect}>Go Back to Verification</button>
    </div>
  )
}

export default RegistrationMessage

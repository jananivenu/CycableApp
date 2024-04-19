import { useNavigate } from 'react-router-dom'
import { MainContainer } from '../../../../styles'
import { AccentButton } from '../../../../styles/elements/buttons'
import { StyledH2 } from '../../../../styles/elements/typography'

const RegistrationMessage = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/login') // Redirect to the verification page
  }

  return (
    <MainContainer>
      <StyledH2>Registration Successful!</StyledH2>
      <p>Thank you for registering.</p>
      <AccentButton onClick={handleRedirect}>Go Back to Login</AccentButton>
    </MainContainer>
  )
}

export default RegistrationMessage

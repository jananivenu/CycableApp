import { useNavigate } from 'react-router-dom'
import { MainContainer, NarrowSectionContainer } from '../../../../styles'
import { AccentButton } from '../../../../styles/elements/buttons'
import { LeadParagraph, StyledH2 } from '../../../../styles/elements/typography'

const RegistrationMessage = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/login')
  }

  return (
    <MainContainer>
      <NarrowSectionContainer>
        <StyledH2>Registration Successful!</StyledH2>
        <AccentButton onClick={handleRedirect}>Login</AccentButton>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default RegistrationMessage

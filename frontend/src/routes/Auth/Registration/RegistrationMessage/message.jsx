import { useNavigate } from 'react-router-dom'
import {
  MainContainer,
  NarrowSectionContainer,
  SectionContainer,
} from '../../../../styles'
import { AccentButton } from '../../../../styles/elements/buttons'
import { StyledH3 } from '../../../../styles/elements/typography'

const RegistrationMessage = () => {
  const navigate = useNavigate()

  const handleRedirect = () => {
    navigate('/login')
  }

  return (
    <MainContainer>
      <NarrowSectionContainer>
        <SectionContainer>
          <StyledH3>
            Welcome to the community, You've successfully registered!
          </StyledH3>

          <AccentButton onClick={handleRedirect}>Go to Login Page</AccentButton>
        </SectionContainer>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default RegistrationMessage

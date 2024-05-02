import { SectionContainer } from '../../../styles'
import { StyledH3 } from '../../../styles/elements/typography'
import TeamMember from './TeamMember'
import { TeamContainer } from './styles'
import { teamMembers } from './teamMembers'

function Team() {
  return (
    <SectionContainer>
      <StyledH3>Our Team</StyledH3>
      <TeamContainer>
        {teamMembers.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </TeamContainer>
    </SectionContainer>
  )
}

export default Team

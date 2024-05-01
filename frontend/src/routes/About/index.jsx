import { MainContainer, NarrowSectionContainer } from '../../styles'
import { LeadParagraph, StyledH2 } from '../../styles/elements/typography'
import team from '../../assets/us/team.png'
import { TeamPhoto } from './styles'

function About() {
  return (
    <MainContainer>
      <NarrowSectionContainer>
        <StyledH2>About</StyledH2>
        <LeadParagraph>
          With Cycable, cyclists have the power to swiftly report accidents,
          near misses, and hazards encountered on the road. Through seamless
          reporting features and real-time data collection, we empower cyclists
          to advocate for safer streets and promote awareness among fellow
          riders and city authorities. Join us in our mission to make every ride
          safer with Cycable.
        </LeadParagraph>
        <TeamPhoto src={team} />
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default About

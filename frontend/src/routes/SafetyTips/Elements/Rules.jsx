import { MainContainer, SectionContainer } from '../../../styles'
import { LeadParagraph, StyledH2 } from '../../../styles/elements/typography'

const Rules = () => {
  return (
    <MainContainer>
      <SectionContainer>
        <StyledH2>Rules of the Road</StyledH2>
        <LeadParagraph>
          Understand the importance of following traffic laws and how they apply
          to cyclists.
        </LeadParagraph>
        <LeadParagraph>
          <b>Obey Traffic Laws</b>: Cyclists are considered vehicles on the road
          and must obey the same traffic laws as motorists. This includes
          stopping at stop signs, yielding to pedestrians at crosswalks, and
          obeying traffic signals and signs.
        </LeadParagraph>
        <LeadParagraph>
          <b>Use Hand Signals</b>: Use hand signals to indicate your intentions
          to motorists and other cyclists. Signal left turns, right turns, and
          stops using clear and distinct hand signals to communicate your
          movements.
        </LeadParagraph>
        <LeadParagraph>
          <b>Stay in Designated Bike Lanes</b>: Whenever possible, ride in
          designated bike lanes or on bike paths separated from vehicular
          traffic. If no bike lane is available, ride as far to the right as
          practicable, but maintain a safe distance from parked cars to avoid
          the "door zone."
        </LeadParagraph>
      </SectionContainer>
    </MainContainer>
  )
}

export default Rules

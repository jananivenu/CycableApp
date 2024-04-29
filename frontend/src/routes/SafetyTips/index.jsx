import { useState } from 'react'
import { MainContainer, SectionContainer } from '../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../styles/elements/typography'
import EssentialGear from './Elements/EssentialGear'
import Rules from './Elements/Rules'
import Emergency from './Elements/Emergency'
import TipsSelector from './Elements/TipsSelector'
import EssentialGears from './Elements/EssentialGear'

const SafetyTips = () => {
  const [tip, setTip] = useState('')

  const handleSelectTip = (selectedTip) => {
    setTip(selectedTip)
    console.log('Selected tip:', selectedTip)
  }
  return (
    <MainContainer>
      <SectionContainer>
        <StyledH2>Safety Tips</StyledH2>
        <LeadParagraph>
          Welcome to Our Safety Tips Page! <br /> <br />
          At Cycable, we're committed to ensure safe cycling for riders of all
          levels. Whether you're a seasoned cyclist or just starting out.
          <br />
          Our app is there for you to report or get informed about unsafe
          cycling locations, to ensure that you get happy ride. <br />
          <br />
          However, with the joy of cycling comes the responsibility of ensuring
          your own safety and the safety of those around you.
          <br /> That's why we've compiled this comprehensive guide to provide
          you with valuable tips and resources to help you stay safe on the road
          ( <em>BikeAware!</em>)
        </LeadParagraph>
      </SectionContainer>
      <SectionContainer>
        <StyledH3> In this Guide you will find Tips about: </StyledH3>
        <TipsSelector onSelect={handleSelectTip} />
      </SectionContainer>
      <SectionContainer>
        {tip === 'gear' && <EssentialGears />}
        {tip === 'rules' && <Rules />}
        {tip === 'emergency' && <Emergency />}
      </SectionContainer>
      <SectionContainer>
        <p>
          Please Note: This safety guide is a living document that is
          continuously being updated and improved to provide cyclists with the
          most relevant and comprehensive information.
        </p>
      </SectionContainer>
    </MainContainer>
  )
}

export default SafetyTips

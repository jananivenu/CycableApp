// ;<>
//   <p>
//     If possible, please attach any relevant photos related to the near miss
//     incident. This could include images of the location,or any visible hazards
//     encountered.
//   </p>

import { ComposeIconTitleWrapper, SectionContainer } from '../../../../styles'
import { ComposeIcone } from '../../../../styles/elements/icons'
import compose from '../../../../assets/icons/compose.png'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
import { FormTwoColumn, QuestionGroup } from '../../../../styles/elements/forms'
import LocationPicker from '../Elements/Location'
import DatePicker from '../Elements/Date'
import Images from '../Elements/Images'
import Description from '../Elements/Description'
import { useState } from 'react'

//   <p>
//     Share your experience regarding near misses or hazardous locations for
//     cyclists below. Your input aids in identifying potential risks and improving
//     safety measures for our biking community. Your contribution is invaluable in
//     creating safer routes and promoting awareness among fellow riders:

// Your input can help us pinpoint areas
// of concern and work towards safer streets for all cyclists.
//   </p>
// </>

const NearMiss = () => {
  const [reportData, setReportData] = useState({})

  const [involvedParty, setInvolvedParty] = useState('')
  const INVOLVED_PARTIES_CHOICES = [
    'Car',
    'Bus, trolleybus, tram',
    'Commercial vehicle',
    'Motorcycle',
    'Another bicycle',
    'Pedestrian',
    'E-Scooter',
    'Road markings or infrastructure',
    'Other',
  ]

  const handlePartySelect = (e) => {
    setInvolvedParty(e.target.value)
  }
  return (
    <SectionContainer>
      <ComposeIconTitleWrapper>
        <ComposeIcone src={compose} />
        <StyledH2> Dangerous Locations</StyledH2>
      </ComposeIconTitleWrapper>
      <LeadParagraph>
        We empathize with the stress of experiencing a near miss or encountering
        dangerous locations while cycling. Here, you have the opportunity to
        share your experience and help us address this issue within our
        community.
        <b>
          Did you experience a near miss or encounter a hazardous location?
          Don't hesitate to report it!
        </b>
        By providing details such as <b>the location</b>, and any
        <b> involved parties,</b>
        you're contributing to creating safer streets for cyclists.
      </LeadParagraph>
      <FormTwoColumn>
        <LocationPicker />
        <DatePicker />

        <QuestionGroup>
          <p>
            If possible, please attach any relevant photos related to the near
            miss incident. This could include images of the location,or any
            visible hazards encountered.
          </p>
          <Images />
        </QuestionGroup>
        <QuestionGroup>
          <StyledH3>Who was involved in the accident?</StyledH3>
          <select
            id="involved_parties"
            value={reportData.involved_parties}
            onChange={handlePartySelect}
          >
            <option value="" disabled>
              Please Choose
            </option>
            {INVOLVED_PARTIES_CHOICES.map((party, index) => (
              <option key={index} value={party}>
                {party}
              </option>
            ))}
          </select>
        </QuestionGroup>
        <QuestionGroup>
          <StyledH3>Comment</StyledH3>
          <p>
            Feel free to provide details regarding near misses or hazardous
            locations for cyclists below. Your input helps identify potential
            risks and improves safety measures for our biking community.
          </p>
          <Description />
        </QuestionGroup>
      </FormTwoColumn>
    </SectionContainer>
  )
}

export default NearMiss

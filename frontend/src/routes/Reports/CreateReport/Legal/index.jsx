import { ComposeIconTitleWrapper, SectionContainer } from '../../../../styles'
import {
  FormTwoColumn,
  InputGroup,
  QuestionGroup,
} from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
import LocationPicker from '../Elements/Location'
import { ComposeIcone } from '../../../../styles/elements/icons'
import compose from '../../../../assets/icons/compose.png'
import Images from '../Elements/Images'

import { SuccessMsg } from '../styles'
import { useState } from 'react'

function LegalReport() {
  const [successMsg, setSuccessMsg] = useState(false)

  const handleSubmit = () => {
    // add here the logic to dispatch and to fetch to api
    setSuccessMsg(true)
  }
  return (
    <>
      {!successMsg && (
        <SectionContainer>
          <ComposeIconTitleWrapper>
            <ComposeIcone src={compose} />
            <StyledH2>Legalizing "Violations"</StyledH2>
          </ComposeIconTitleWrapper>
          <LeadParagraph>
            There are many places in the city where minor changes would make
            life safer and more convenient for bicyclists. For example, at{' '}
            <b>
              locations where traffic light phases allow safe crossing but
              there's no pedestrian crossing or bike path
            </b>
            , simply drawing them could stop such crossings from being
            considered violations. Do you know such places? Tell us!
          </LeadParagraph>

          <FormTwoColumn>
            <LocationPicker />

            <QuestionGroup>
              <InputGroup>
                If possible, please attach any relevant photos related to
                locations needing improvements for cyclists.
                <Images />
                {/* <CameraComponent /> */}
              </InputGroup>
            </QuestionGroup>
            <QuestionGroup>
              <StyledH3>Comment</StyledH3>

              <InputGroup>
                <p>
                  Feel free to provide details regarding needed improvements for
                  cyclists below. Your input helps identify potential risks and
                  improves safety measures for our biking community.
                </p>
                <Description />
              </InputGroup>
            </QuestionGroup>

            <div>
              <AccentButton onClick={handleSubmit}>Send</AccentButton>
            </div>
          </FormTwoColumn>
        </SectionContainer>
      )}
      {successMsg && (
        <SectionContainer>
          <SuccessMsg>
            <StyledH3>
              Thank you for taking time and reporting the incident via our App.{' '}
              <br />
              Your contribution helps in making our streets safer for cyclists.
              We appreciate your cooperation and concern for the biking
              community. <br />
              <br /> --- Join the Movement for Safer Cycling --- <br />
              --- From Your Stories to Safer Streets ---
            </StyledH3>
          </SuccessMsg>
        </SectionContainer>
      )}
    </>
  )
}

export default LegalReport

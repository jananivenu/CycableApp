import { ComposeIconTitleWrapper, SectionContainer } from '../../../../styles'
import { FormTwoColumn, QuestionGroup } from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
//import compose from '../../../../assets/icons/compose.png'
import { useState } from 'react'
import DatePicker from '../Elements/Date/index.jsx'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAccidentReport,
  setCommonFields,
  setTheftReport,
} from '../../../../store/slices/reportCreateSlice.js'
import sendReport from '../../../../axios/sendReport.js'
import Images from '../Elements/Images/index.jsx'
import Description from '../Elements/Description.jsx'
import LocationPicker from '../Elements/Location/index.jsx'
import { ComposeIcone } from '../../../../styles/elements/icons.jsx'
import compose from '../../../../assets/icons/compose.png'
import CameraComponent from '../../../Camera/camera.jsx'
import { MenuWrapper, SuccessMsg } from '../styles.jsx'

//comment
function AccidentReport() {
  const dispatch = useDispatch()
  const [reportData, setReportData] = useState({})
  //   const reportData = useSelector((store) => store.report)
  const [involvedParty, setInvolvedParty] = useState('')
  const [successMsg, setSuccessMsg] = useState(false)
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
  const inputHandler = (e) => {
    const { id, value, checked } = e.target

    dispatch(setCommonFields({ [id]: value }))

    if (id === 'was_police_locked')
      dispatch(setTheftReport({ was_bicycle_locked: checked }))
    if (id === 'involved_parties')
      dispatch(setAccidentReport({ involved_parties: value }))
  }

  const handleSubmit = async () => {
    setSuccessMsg(true)
    const reportData = new FormData()
    reportData
    try {
      await sendReport(reportData)
      dispatch(setAccidentReport(reportData))
    } catch (error) {
      console.log('error sending the report:', error)
    }
  }

  return (
    <>
      {!successMsg && (
        <SectionContainer>
          <ComposeIconTitleWrapper>
            <ComposeIcone src={compose} />
            <StyledH2>Bicycle Accident</StyledH2>
          </ComposeIconTitleWrapper>
          <LeadParagraph>
            We hear a lot of Bicycle Accidents!Mostly because the people are not
            following rules, or run into potholes or unkempt roads.Sometimes it
            is unfortunate!!Maybe he lane is too small for two vehicles to be on
            the same lane/oppposite to each other. Please report your incident
            here,so that it can get a larger audience,and also that people are
            BikeAware.
          </LeadParagraph>
          <FormTwoColumn>
            <LocationPicker />
            <DatePicker />
            <QuestionGroup>
              <StyledH3>
                Was the police called to document the accident?
              </StyledH3>
              <label>
                <input
                  id="was_police_called"
                  type="radio"
                  value="true"
                  checked={reportData.was_police_called === true}
                  onChange={inputHandler}
                />
                Yes
              </label>
              <label>
                <input
                  id="was_police_called"
                  type="radio"
                  value="false"
                  checked={reportData.was_police_called === false}
                  onChange={inputHandler}
                />
                No
              </label>
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
              <p>
                If possible, please attach photo/s of the scene of the bike
                accident, including the location where it occurred.
                Additionally, if available, include a photo of any damages to
                the bicycle or other vehicles involved.
              </p>
              <Images />
              <CameraComponent />
            </QuestionGroup>
            <StyledH3>Comment</StyledH3>
            <p>
              Feel free to provide additional details about the accident to
              assist fellow cyclists and support our community in promoting
              safety on the roads.{' '}
            </p>
            <Description />

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

export default AccidentReport

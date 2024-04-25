import { ComposeIconTitleWrapper, SectionContainer } from '../../../../styles'
import {
  ErrorMessage,
  FormTwoColumn,
  QuestionGroup,
} from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
import { useState } from 'react'
import DatePicker from '../Elements/Date/index.jsx'
import { useDispatch, useSelector } from 'react-redux'
import {
  setAccidentReport,
  setCommonFields,
} from '../../../../store/slices/reportCreateSlice.js'
import sendReport from '../../../../axios/sendReport.js'
import Images from '../Elements/Images/index.jsx'
import LocationPicker from '../Elements/Location/index.jsx'
import { ComposeIcone } from '../../../../styles/elements/icons.jsx'
import compose from '../../../../assets/icons/compose.png'
import CameraComponent from '../../../Camera/camera.jsx'
import { SuccessMsg } from '../styles.jsx'

function AccidentReport() {
  const dispatch = useDispatch()

  const reportData = useSelector((state) => state.report)
  const details = useSelector((state) => state.report.description)

  const [uploadedImages, setUploadedImages] = useState([])
  const [successMsg, setSuccessMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

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

  const handleImagesChange = (imageFiles) => {
    console.log(imageFiles)
    setUploadedImages(imageFiles)
  }

  const inputHandler = (e) => {
    const { id, value } = e.target

    if (id === 'was_police_called') {
      dispatch(setAccidentReport({ was_police_called: value }))
    } else if (id === 'involved_parties') {
      dispatch(setAccidentReport({ involved_parties: value }))
    } else {
      dispatch(setCommonFields({ [id]: value }))
    }
  }

  const handleBlur = (e) => {
    const { id } = e.target
    if (id === 'was_police_called' && !reportData.was_police_called) {
      setErrorMsg('Please select an option.')
    } else if (
      id === 'involved_parties' &&
      reportData.involved_parties === ''
    ) {
      setErrorMsg('Please select an option.')
    } else {
      setErrorMsg(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('description', reportData.description)
    formData.append('longitude', reportData.longitude)
    formData.append('latitude', reportData.latitude)
    formData.append('address', reportData.address)
    formData.append('custom_date', reportData.custom_date)
    formData.append('was_police_called', reportData.was_police_called)
    formData.append('involved_parties', reportData.involved_parties)
    formData.append('incident_type', 'bicycle_accident')
    uploadedImages.forEach((image) => {
      formData.append('images', image.file)
    })
    try {
      await sendReport(formData)
    } catch (error) {
      console.log('error sending the report:', error)
    }
    setSuccessMsg(true)
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
                  value="True"
                  checked={reportData.was_police_called === true}
                  onChange={inputHandler}
                />
                Yes
              </label>
              <label>
                <input
                  id="was_police_called"
                  type="radio"
                  value="False"
                  checked={reportData.was_police_called === false}
                  onChange={inputHandler}
                />
                No
              </label>
            </QuestionGroup>
            <QuestionGroup onBlur={handleBlur}>
              <StyledH3>Who was involved in the accident?</StyledH3>
              <select
                id="involved_parties"
                value={reportData.involved_parties}
                onChange={inputHandler}
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
              {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
            </QuestionGroup>
            <QuestionGroup>
              <p>
                If possible, please attach photo/s of the scene of the bike
                accident, including the location where it occurred.
                Additionally, if available, include a photo of any damages to
                the bicycle or other vehicles involved.
              </p>
              <Images onImagesChange={handleImagesChange} />
              <CameraComponent />
            </QuestionGroup>
            <StyledH3>Comment</StyledH3>
            <p>
              Feel free to provide additional details about the accident to
              assist fellow cyclists and support our community in promoting
              safety on the roads.{' '}
            </p>
            <textarea
              id="description"
              placeholder="More details..."
              value={reportData.description}
              onChange={inputHandler}
              required
            ></textarea>

            <div>
              {details &&
              details.length > 19 &&
              reportData.was_police_called !== '' ? (
                <AccentButton onClick={handleSubmit}>Send</AccentButton>
              ) : (
                <p>greyed out button</p>
              )}
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

import { ComposeIconTitleWrapper, SectionContainer } from '../../../../styles'
import { ComposeIcone } from '../../../../styles/elements/icons'
import compose from '../../../../assets/icons/compose.png'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
import {
  ErrorMessage,
  FormTwoColumn,
  QuestionGroup,
} from '../../../../styles/elements/forms'
import LocationPicker from '../Elements/Location'
import DatePicker from '../Elements/Date'
import Images from '../Elements/Images'
import { useState } from 'react'
import CameraComponent from '../../../Camera/camera'
import { AccentButton } from '../../../../styles/elements/buttons'
import { SuccessMsg } from '../styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCommonFields,
  setViolationsReport,
} from '../../../../store/slices/reportCreateSlice'
import sendReport from '../../../../axios/sendReport'

const NearMiss = () => {
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

    if (id === 'involved_parties') {
      dispatch(setViolationsReport({ involved_parties: value }))
    } else {
      dispatch(setCommonFields({ [id]: value }))
    }
  }

  const handleBlur = (e) => {
    const { id } = e.target
    if (id === 'involved_parties' && reportData.involved_parties === '') {
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
    formData.append('involved_parties', reportData.involved_parties)
    formData.append('incident_type', 'violations')
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
            <StyledH2> Dangerous Locations</StyledH2>
          </ComposeIconTitleWrapper>
          <LeadParagraph>
            We empathize with the stress of experiencing a near miss or
            encountering dangerous locations while cycling. Here, you have the
            opportunity to share your experience and help us address this issue
            within our community.
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
                If possible, please attach any relevant photos related to the
                near miss incident. This could include images of the location,or
                any visible hazards encountered.
              </p>
              <Images onImagesChange={handleImagesChange} />
              <CameraComponent />
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
              <StyledH3>Comment</StyledH3>
              <p>
                Feel free to provide details regarding near misses or hazardous
                locations for cyclists below. Your input helps identify
                potential risks and improves safety measures for our biking
                community.
              </p>
              <QuestionGroup>
                <textarea
                  id="description"
                  placeholder="More details..."
                  value={reportData.description}
                  onChange={inputHandler}
                  required
                ></textarea>
              </QuestionGroup>
            </QuestionGroup>
            <div>
              {details && details.length > 19 ? (
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

export default NearMiss

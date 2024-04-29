import { GridSectionContainer } from '../../../../styles'
import {
  BasicForm,
  ErrorMessage,
  QuestionGroup,
} from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import { StyledH3 } from '../../../../styles/elements/typography'
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
import ThankYouMessage from '../Elements/ThankYouMessage/ThankYouMessage.jsx'
import formsData from '../Elements/AboutForm/formsData.jsx'
import AboutForm from '../Elements/AboutForm/index.jsx'
import YesNoButtonGroup from '../Elements/YesNo/index.jsx'
import Description from '../Elements/Description/index.jsx'
import { InLineGroup } from '../styles.jsx'

function AccidentReport() {
  const dispatch = useDispatch()

  const reportData = useSelector((state) => state.report)
  const [uploadedImages, setUploadedImages] = useState([])
  const [successMsg, setSuccessMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const { title, content } = formsData.bicycleAccident

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

  const handleWasPoliceCalledChange = (newValue) => {
    dispatch(setAccidentReport({ was_police_called: newValue }))
  }

  const handleImagesChange = (imageFiles) => {
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
        <GridSectionContainer>
          <BasicForm>
            <AboutForm title={title}>{content}</AboutForm>
            <LocationPicker />
            <DatePicker />
            <QuestionGroup>
              <StyledH3>
                Was the police called to document the accident?
              </StyledH3>
              <InLineGroup>
                <YesNoButtonGroup
                  value={reportData.was_police_called === 'True'}
                  onChange={handleWasPoliceCalledChange}
                />
              </InLineGroup>
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
            </QuestionGroup>
            <QuestionGroup>
              <StyledH3>Comment</StyledH3>
              <p>
                Feel free to provide additional details about the accident to
                assist fellow cyclists and support our community in promoting
                safety on the roads.{' '}
              </p>
              <Description
                value={reportData.description}
                onChange={inputHandler}
              />
            </QuestionGroup>
            <div>
              <AccentButton onClick={handleSubmit}>Send</AccentButton>
            </div>
          </BasicForm>
        </GridSectionContainer>
      )}
      {successMsg && <ThankYouMessage />}
    </>
  )
}

export default AccidentReport

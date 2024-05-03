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
import formsData from '../Elements/AboutForm/formsData.jsx'
import AboutForm from '../Elements/AboutForm/index.jsx'
import YesNoButtonGroup from '../Elements/YesNo/index.jsx'
import Description from '../Elements/Description/index.jsx'
import { InLineGroup } from '../styles.jsx'
import IntroYesNo from './IntroYesNo.jsx'
import IntroImages from './IntroImages.jsx'
import IntroDescription from './IntroDescription.jsx'
import ThankYouModal from '../Elements/ThankYouMessage/ThankYouModal.jsx'

function AccidentReport({ onCloseModal }) {
  const dispatch = useDispatch()

  const reportData = useSelector((state) => state.report)
  const [uploadedImages, setUploadedImages] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [policeCallStatus, setPoliceCallStatus] = useState(null)

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

  const handleWasPoliceCalledChange = (status) => {
    setPoliceCallStatus(status)
    dispatch(setAccidentReport({ was_police_called: status }))
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
      setModalIsOpen(true)
    } catch (error) {
      console.log('error sending the report:', error)
      setModalIsOpen(false)
    }
  }

  const resetForm = () => {
    dispatch(
      setCommonFields({
        description: '',
        longitude: '',
        latitude: '',
        address: '',
        custom_date: '',
        incident_type: '',
      }),
    )
    setUploadedImages([])
  }

  const closeModal = () => {
    resetForm()
    setModalIsOpen(false)
    if (onCloseModal) {
      onCloseModal()
    }
  }

  return (
    <>
      <GridSectionContainer>
        <BasicForm onSubmit={handleSubmit}>
          <AboutForm title={title}>{content}</AboutForm>

          <LocationPicker />
          <DatePicker />

          <QuestionGroup>
            <IntroYesNo />
            <InLineGroup>
              <YesNoButtonGroup
                value={policeCallStatus}
                onChange={handleWasPoliceCalledChange}
              />
            </InLineGroup>
          </QuestionGroup>

          <QuestionGroup>
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
          </QuestionGroup>

          <QuestionGroup>
            <IntroImages />
            <Images onImagesChange={handleImagesChange} />
          </QuestionGroup>

          <QuestionGroup>
            <IntroDescription />
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
      <ThankYouModal isOpen={modalIsOpen} onClose={closeModal} />
    </>
  )
}

export default AccidentReport

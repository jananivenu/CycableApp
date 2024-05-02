import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GridSectionContainer } from '../../../../styles'
import {
  BasicForm,
  ErrorMessage,
  QuestionGroup,
} from '../../../../styles/elements/forms'
import { StyledH3 } from '../../../../styles/elements/typography'
import { AccentButton } from '../../../../styles/elements/buttons'
import LocationPicker from '../Elements/Location'
import DatePicker from '../Elements/Date'
import Images from '../Elements/Images'
import Description from '../Elements/Description'
import AboutForm from '../Elements/AboutForm'
import formsData from '../Elements/AboutForm/formsData'
import {
  setCommonFields,
  setNearMissReport,
} from '../../../../store/slices/reportCreateSlice'
import sendReport from '../../../../axios/sendReport'
import ThankYouModal from '../Elements/ThankYouMessage/ThankYouModal'

const NearMiss = ({ onCloseModal }) => {
  const dispatch = useDispatch()
  const reportData = useSelector((state) => state.report)
  const [uploadedImages, setUploadedImages] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)

  const { title, content } = formsData.nearMiss

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
    setUploadedImages(imageFiles)
  }

  const handleBlur = (e) => {
    const { id } = e.target
    if (id === 'involved_parties' && reportData.involved_parties === '') {
      setErrorMsg('Please select an option.')
    } else {
      setErrorMsg(null)
    }
  }

  const inputHandler = (e) => {
    const { id, value } = e.target
    if (id === 'involved_parties') {
      dispatch(setNearMissReport({ involved_parties: value }))
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
    formData.append('involved_parties', reportData.involved_parties)
    formData.append('incident_type', 'near_miss')
    uploadedImages.forEach((image) => {
      formData.append('images', image.file)
    })

    try {
      await sendReport(formData)
      setModalIsOpen(true)
    } catch (error) {
      console.log('Error sending the report:', error)
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
            <p>
              If possible, please attach any relevant photos related to the near
              miss incident.
            </p>
            <Images onImagesChange={handleImagesChange} />
          </QuestionGroup>
          <QuestionGroup onBlur={handleBlur}>
            <StyledH3>Was anyone involved ?</StyledH3>
            <p>if not, please select "others"</p>
            <select
              id="involved_parties"
              value={reportData.involved_parties || ''}
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
            <StyledH3>Tell us what happened</StyledH3>
            <p>
              Feel free to provide more details about the near miss or hazardous
              location. Your input is crucial in creating safer streets for
              cyclists.
            </p>
            <Description
              value={reportData.description}
              onChange={inputHandler}
            />
          </QuestionGroup>
          <div>
            <AccentButton type="submit">Send</AccentButton>
          </div>
        </BasicForm>
      </GridSectionContainer>

      <ThankYouModal isOpen={modalIsOpen} onClose={closeModal} />
    </>
  )
}

export default NearMiss

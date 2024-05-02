import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GridSectionContainer } from '../../../../styles'
import { AccentButton } from '../../../../styles/elements/buttons'
import { BasicForm, QuestionGroup } from '../../../../styles/elements/forms'
import { InLineGroup } from '../styles.jsx'
import {
  setCommonFields,
  setTheftReport,
} from '../../../../store/slices/reportCreateSlice'

import sendReport from '../../../../axios/sendReport'

import Images from '../Elements/Images'
import LocationPicker from '../Elements/Location'
import DatePicker from '../Elements/Date'
import YesNoButtonGroup from '../Elements/YesNo/index.jsx'
import AboutForm from '../Elements/AboutForm/index.jsx'
import formsData from '../Elements/AboutForm/formsData.jsx'
import Description from '../Elements/Description/index.jsx'
import ThankYouModal from '../Elements/ThankYouMessage/ThankYouModal.jsx'
import IntroDescription from './IntroDescription.jsx'
import IntroYesNo from './IntroYesNo.jsx'
import IntroImages from './IntroImages.jsx'

const TheftReport = ({ onCloseModal }) => {
  const dispatch = useDispatch()

  const reportData = useSelector((state) => state.report)
  const [lockStatus, setLockStatus] = useState(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [uploadedImages, setUploadedImages] = useState([])
  const { title, content } = formsData.bicycleTheft

  const inputHandler = (e) => {
    dispatch(setCommonFields({ description: e.target.value }))
  }

  const handleImagesChange = (imageFiles) => {
    setUploadedImages(imageFiles)
  }

  const handleLockStatusChange = (status) => {
    setLockStatus(status)
    dispatch(setTheftReport({ was_bicycle_locked: status }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('description', reportData.description)
    formData.append('longitude', reportData.longitude)
    formData.append('latitude', reportData.latitude)
    formData.append('address', reportData.address)
    formData.append('custom_date', reportData.custom_date)
    formData.append('was_bicycle_locked', reportData.was_bicycle_locked)
    formData.append('incident_type', 'bicycle_theft')

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
        <BasicForm>
          <AboutForm title={title}>{content}</AboutForm>

          <LocationPicker />
          <DatePicker />

          <QuestionGroup>
            <IntroYesNo />
            <InLineGroup>
              <YesNoButtonGroup
                value={lockStatus}
                onChange={handleLockStatusChange}
              />
            </InLineGroup>
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

export default TheftReport

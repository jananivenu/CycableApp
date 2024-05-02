import { GridSectionContainer } from '../../../../styles'
import {
  BasicForm,
  InputGroup,
  QuestionGroup,
} from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import { StyledH3 } from '../../../../styles/elements/typography'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCommonFields } from '../../../../store/slices/reportCreateSlice'
import sendReport from '../../../../axios/sendReport'
import ThankYouModal from '../Elements/ThankYouMessage/ThankYouModal'
import AboutForm from '../Elements/AboutForm'
import formsData from '../Elements/AboutForm/formsData'
import Description from '../Elements/Description'
import LocationPicker from '../Elements/Location'
import Images from '../Elements/Images'

function LegalReport({ onCloseModal }) {
  const dispatch = useDispatch()
  const reportData = useSelector((state) => state.report)
  const [uploadedImages, setUploadedImages] = useState([])
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { title, content } = formsData.violations

  const inputHandler = (e) => {
    const { id, value } = e.target
    dispatch(setCommonFields({ [id]: value }))
  }

  const handleImagesChange = (imageFiles) => {
    setUploadedImages(imageFiles)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('description', reportData.description)
    formData.append('longitude', reportData.longitude)
    formData.append('latitude', reportData.latitude)
    formData.append('address', reportData.address)
    formData.append('custom_date', reportData.custom_date)
    formData.append('incident_type', 'violations')
    uploadedImages.forEach((image) => {
      formData.append('images', image.file)
    })

    try {
      await sendReport(formData)
      setModalIsOpen(true)
    } catch (error) {
      console.error('Error sending the report:', error)
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

          <QuestionGroup>
            <InputGroup>
              If possible, please attach any relevant photos related to
              locations needing improvements for cyclists.
              <Images onImagesChange={handleImagesChange} />
            </InputGroup>
          </QuestionGroup>

          <QuestionGroup>
            <StyledH3>What improvements do you suggest?</StyledH3>
            <p>
              Feel free to provide details regarding needed improvements for
              cyclists below. Your input helps identify potential risks and
              improves safety measures for our biking community.
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

      <ThankYouModal isOpen={modalIsOpen} onClose={closeModal} />
    </>
  )
}

export default LegalReport

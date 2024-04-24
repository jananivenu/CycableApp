import { useState } from 'react'
import { ComposeIconTitleWrapper, SectionContainer } from '../../../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
import { FormTwoColumn, QuestionGroup } from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import compose from '../../../../assets/icons/compose.png'
import { ComposeIcone } from '../../../../styles/elements/icons'

import sendReport from '../../../../axios/sendReport'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCommonFields,
  setTheftReport,
} from '../../../../store/slices/reportCreateSlice'
import Description from '../Elements/Description'
import Images from '../Elements/Images'
import LocationPicker from '../Elements/Location'
import { SquareRadioInput } from '../../../../styles/elements/checkbox.jsx'
import DatePicker from '../Elements/Date'
import CameraComponent from '../../../Camera/camera.jsx'
import { SuccessMsg } from '../styles.jsx'

const TheftReport = () => {
  const dispatch = useDispatch()

  const reportData = useSelector((state) => state.report)
  const [uploadedImages, setUploadedImages] = useState([])
  const [successMsg, setSuccessMsg] = useState(false)

  const inputHandler = (e) => {
    const { id, value } = e.target
    if (id === 'was_bicycle_locked') {
      dispatch(setTheftReport({ was_bicycle_locked: value }))
    }
    dispatch(setCommonFields({ [id]: value }))
  }

  const handleImagesChange = (imageFiles) => {
    console.log(imageFiles)
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

    formData.append('was_bicycle_locked', reportData.was_bicycle_locked)
    formData.append('incident_type', 'bicycle_theft')

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
            <StyledH2>Bicycle Theft</StyledH2>
          </ComposeIconTitleWrapper>
          <LeadParagraph>
            We understand the frustration and inconvenience that comes with
            having your bike stolen. Here, you have the opportunity to share
            your experience and help us address this issue within our community.
            <b>Was your bike stolen? Don't hesitate to report it!</b>
            By providing details such as the <b>location</b> and
            <b> whether your bicycle was locked</b>, you're contributing to
            creating safer streets for cyclists.
          </LeadParagraph>
          <FormTwoColumn>
            <LocationPicker />
            <DatePicker />
            <QuestionGroup>
              <StyledH3>Was The Bicycle Locked?</StyledH3>

              <label>
                YES
                <SquareRadioInput
                  id="was_bicycle_locked"
                  type="radio"
                  name="lockStatus"
                  value="true"
                  checked={reportData.was_bicycle_locked == true}
                  onChange={inputHandler}
                />
              </label>

              <label>
                NO
                <SquareRadioInput
                  id="was_bicycle_locked"
                  type="radio"
                  name="lockStatus"
                  value="false"
                  checked={reportData.was_bicycle_locked == false}
                  onChange={inputHandler}
                />
              </label>
            </QuestionGroup>
            <QuestionGroup>
              <p>
                If possible, please attach photo/s of your stolen bicycle, and,
                if available, include a photo of the location where the bike was
                stolen.
              </p>
              <Images onImagesChange={handleImagesChange} />
              <CameraComponent />
            </QuestionGroup>
            <QuestionGroup></QuestionGroup>

            <StyledH3>Comment</StyledH3>
            <p>
              Feel free to provide additional details about the incident to aid
              fellow cyclists and support our community in preventing bicycle
              theft:
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

export default TheftReport

import {
  ComposeIconTitleWrapper,
  GridSectionContainer,
  NarrowSectionContainer,
  SectionContainer,
} from '../../../../styles'
import {
  BasicForm,
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
import { useDispatch, useSelector } from 'react-redux'
import { setCommonFields } from '../../../../store/slices/reportCreateSlice'
import sendReport from '../../../../axios/sendReport'
import ThankYouMessage from '../Elements/ThankYouMessage'

function LegalReport() {
  const dispatch = useDispatch()

  const details = useSelector((state) => state.report.description)
  const reportData = useSelector((state) => state.report)

  const [uploadedImages, setUploadedImages] = useState([])
  const [successMsg, setSuccessMsg] = useState(false)

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
    } catch (error) {
      console.log('error sending the report:', error)
    }

    setSuccessMsg(true)
  }
  return (
    <>
      {!successMsg && (
        <GridSectionContainer>
          <div>
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

          <BasicForm>
            <LocationPicker />

            <QuestionGroup>
              <InputGroup>
                If possible, please attach any relevant photos related to
                locations needing improvements for cyclists.
                <Images onImagesChange={handleImagesChange} />
              </InputGroup>
            </QuestionGroup>
            <QuestionGroup>
              <StyledH3>Comment</StyledH3>
              <p>
                Feel free to provide details regarding needed improvements for
                cyclists below. Your input helps identify potential risks and
                improves safety measures for our biking community.
              </p>

              <InputGroup>
                <textarea
                  id="description"
                  placeholder="More details..."
                  value={reportData.description}
                  onChange={inputHandler}
                  required
                ></textarea>
              </InputGroup>
            </QuestionGroup>
            <div>
              {details && details.length > 19 ? (
                <AccentButton onClick={handleSubmit}>Send</AccentButton>
              ) : (
                <p>greyed out button</p>
              )}
            </div>
          </BasicForm>
          </div>
          <div></div>
        </GridSectionContainer>
      )}
      {successMsg && <ThankYouMessage />}
    </>
  )
}

export default LegalReport

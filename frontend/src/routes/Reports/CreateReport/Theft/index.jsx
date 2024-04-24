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
import { useDispatch } from 'react-redux'
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

const TheftReport = () => {
  const dispatch = useDispatch()
  const [reportData, setReportData] = useState({})

  const inputHandler = (e) => {
    const { id, value, checked } = e.target

    if (id === 'use_current_time' || id === 'was_bicycle_locked') {
      setReportData((prevData) => ({
        ...prevData,
        [id]: checked,
      }))
    }

    setReportData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
    console.log(reportData)

    dispatch(setCommonFields({ [id]: value }))

    if (id === 'was_bicycle_locked') {
      dispatch(setTheftReport({ was_bicycle_locked: e.target.checked }))
    }
  }

  const handleSubmit = async () => {
    try {
      await sendReport(reportData)
      dispatch(setTheftReport(reportData))
    } catch (error) {
      console.log('error sending the report:', error)
    }
  }

  return (
    <SectionContainer>
      <ComposeIconTitleWrapper>
        <ComposeIcone src={compose} />
        <StyledH2>Bicycle Theft</StyledH2>
      </ComposeIconTitleWrapper>
      <LeadParagraph>
        We understand the frustration and inconvenience that comes with having
        your bike stolen. Here, you have the opportunity to share your
        experience and help us address this issue within our community.
        <b>Was your bike stolen? Don't hesitate to report it!</b>
        By providing details such as the <b>location</b> and
        <b> whether your bicycle was locked</b>, you're contributing to creating
        safer streets for cyclists.
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
              onChange={inputHandler}
            />
          </label>
        </QuestionGroup>
        <QuestionGroup>
          <p>
            If possible, please attach photo/s of your stolen bicycle, and, if
            available, include a photo of the location where the bike was
            stolen.
          </p>
          <Images />
          <CameraComponent />
        </QuestionGroup>
        <QuestionGroup></QuestionGroup>

        <StyledH3>Comment</StyledH3>
        <p>
          Feel free to provide additional details about the incident to aid
          fellow cyclists and support our community in preventing bicycle theft:
        </p>

        <Description />
        <div>
          <AccentButton onClick={handleSubmit}>Send</AccentButton>
        </div>
      </FormTwoColumn>
    </SectionContainer>
  )
}

export default TheftReport

import { useState } from 'react'
import { SectionContainer } from '../../../../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../../styles/elements/typography'
import { FormTwoColumn } from '../../../../styles/elements/forms'
import { AccentButton } from '../../../../styles/elements/buttons'
import compose from '../../../../assets/icons/compose.png'
import { ComposeIcone } from '../../../../styles/elements/icons'

import { useNavigate } from 'react-router-dom'
import sendReport from '../../../../axios/sendReport'
import { FlexContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCommonFields,
  setTheftReport,
} from '../../../../store/slices/reportCreateSlice'
//import Description from '../Elements/Description'
import Images from '../Elements/Images'
import LocationPicker from '../Elements/Location'
const TheftReport = () => {
  const navigate = useNavigate()
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
      <FlexContainer>
        <ComposeIcone src={compose} />
        <StyledH2>Bicycle Theft</StyledH2>
      </FlexContainer>
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

        <div>
          <StyledH3>Date and Time</StyledH3>
          <label>
            Right Now
            <input
              name="dateStatus"
              id="use_current_time"
              type="checkbox"
              value="true"
              checked={reportData.use_current_time == true}
              onChange={inputHandler}
            />
          </label>
          OR
          <label>
            Select a Date
            <input
              name="dateStatus"
              id="custom_date"
              type="date"
              value={reportData.custom_date || ''}
              onChange={inputHandler}
            />
          </label>
        </div>

        <div>
          <StyledH3>Was The Bicycle Locked?</StyledH3>
          <label>
            YES
            <input
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
            <input
              id="was_bicycle_locked"
              type="radio"
              name="lockStatus"
              value="false"
              checked={reportData.was_bicycle_locked == false}
              onChange={inputHandler}
            />
          </label>
        </div>

        <div>
          <Images />
        </div>


        <div>
          <AccentButton onClick={handleSubmit}>Send</AccentButton>
        </div>
      </FormTwoColumn>
    </SectionContainer>
  )
}

export default TheftReport

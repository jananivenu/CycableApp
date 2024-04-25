import {
  InputGroup,
  QuestionGroup,
} from '../../../../../styles/elements/forms.jsx'
import { StyledH3 } from '../../../../../styles/elements/typography.jsx'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { DateText, FlexContainer } from './styles.js'
import { formatDateTime } from '../../../../../utils/formatDateandTime.js'
import { setCommonFields } from '../../../../../store/slices/reportCreateSlice.js'

function DatePicker() {
  const [useCurrentTime, setUseCurrentTime] = useState(false)
  const [customTime, setCustomTime] = useState('')
  const dispatch = useDispatch()
  const handleCheckboxChange = (event) => {
    setUseCurrentTime(event.target.checked)
    if (event.target.checked) {
      const dateNow = new Date().toISOString().slice(0, 16)
      setCustomTime(dateNow)
      console.log(dateNow)
      dispatch(setCommonFields({ custom_date: dateNow }))
    }
  }

  // Function to handle custom time change
  const handleCustomTimeChange = (event) => {
    formatDateTime(setCustomTime(event.target.value))
    dispatch(setCommonFields({ custom_date: event.target.value }))
  }
  return (
    <QuestionGroup>
      <StyledH3>Date and Time</StyledH3>
      <InputGroup>
        <FlexContainer>
          <label>
            <input
              type="checkbox"
              checked={useCurrentTime}
              value={customTime}
              onChange={handleCheckboxChange}
            />
            <DateText>Right Now</DateText>
          </label>
          {/*{!useCurrentTime && (*/}
          <input
            type="datetime-local"
            value={customTime}
            onChange={handleCustomTimeChange}
          />
          {/*)}*/}
          {/*<p>{useCurrentTime ? formatDateTime(new Date()) : formatDateTime(customTime)}</p>*/}
        </FlexContainer>
      </InputGroup>
    </QuestionGroup>
  )
}

export default DatePicker

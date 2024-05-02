import { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerStyled, DatePickerWrapper } from './styles'

function DateRangeInline() {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  return (
    <DatePickerWrapper>
      <DatePickerStyled
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date('2020/01/01')}
        dateFormat="dd/MM/yyyy"
        isClearable={false}
        popperPlacement="bottom-end"
        placeholderText="From..."
      />
      <DatePickerStyled
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={new Date()}
        dateFormat="dd/MM/yyyy"
        isClearable={false}
        placeholderText="...to"
      />
    </DatePickerWrapper>
  )
}

export default DateRangeInline

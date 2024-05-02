import DatePicker from 'react-datepicker'
import styled from 'styled-components'

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 0.5rem;

  padding: 1rem;
  border-radius: 10px;
  background-color: white;

  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;
`

export const DatePickerStyled = styled(DatePicker)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`

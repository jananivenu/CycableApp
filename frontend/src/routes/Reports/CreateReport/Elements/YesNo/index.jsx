import { useState } from 'react'
import { NoButton, YesButton } from './styles'

const YesNoButtonGroup = ({ onChange, value }) => {
  const [selected, setSelected] = useState(value)

  const handleClick = (newValue) => {
    const stringValue = newValue ? "True" : "False"; 
    setSelected(newValue);
    onChange(stringValue); 
  }

  return (
    <>
      <YesButton
        type="button"
        selected={selected === true}
        onClick={() => handleClick(true)}
      >
        YES
      </YesButton>
      <NoButton
        type="button"
        selected={selected === false}
        onClick={() => handleClick(false)}
      >
        NO
      </NoButton>
    </>
  )
}

export default YesNoButtonGroup

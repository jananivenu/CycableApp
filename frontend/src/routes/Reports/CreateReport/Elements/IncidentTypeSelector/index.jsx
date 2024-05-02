import { useState } from 'react'
import { StyledH2 } from '../../../../../styles/elements/typography'
import { SelectorWrappen, TransQuestionWrapper } from './styles'
import TypeButton from '../../../../../components/trivias/TypeButton'

function IncidentTypeSelector({ onSelect, isSelected }) {
  const [isScaledDown, setIsScaledDown] = useState(false)

  const types = [
    { type: 'bicycle_accident', text: 'Bicycle Accident' },
    { type: 'bicycle_theft', text: 'Bicycle Theft' },
    { type: 'near_miss', text: 'Near Miss' },
    { type: 'violations', text: 'Violations' },
  ]

  const handleSelect = (type) => {
    onSelect(type)
    setIsScaledDown(true)
  }

  return (
    <TransQuestionWrapper isScaledDown={isScaledDown}>
      <StyledH2>What Would You Like To Report?</StyledH2>
      <SelectorWrappen>
        {types.map((item) => (
          <TypeButton
            key={item.type}
            type={item.type}
            isSelected={isSelected}
            onSelect={() => handleSelect(item.type)}
            text={item.text}
          />
        ))}
      </SelectorWrappen>
    </TransQuestionWrapper>
  )
}

export default IncidentTypeSelector

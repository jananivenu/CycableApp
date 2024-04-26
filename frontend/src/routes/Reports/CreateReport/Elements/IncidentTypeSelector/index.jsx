import TypeButton from '../../../../../components/trivias/TypeButton'
import { SelectorWrappen } from './styles'

function IncidentTypeSelector({ onSelect, isSelected }) {
  const types = [
    { type: 'bicycle_accident', text: 'Bicycle Accident' },
    { type: 'bicycle_theft', text: 'Bicycle Theft' },
    { type: 'near_miss', text: 'Dangerous Locations' },
    { type: 'violations', text: 'Violations' },
  ]

  return (
    <SelectorWrappen>
      {types.map((item) => (
        <TypeButton
          key={item.type}
          type={item.type}
          isSelected={isSelected}
          onSelect={onSelect}
          text={item.text}
        />
      ))}
    </SelectorWrappen>
  )
}

export default IncidentTypeSelector

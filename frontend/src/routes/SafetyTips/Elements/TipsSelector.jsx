import { SectionContainer } from '../../../styles'
import TipsButton from './TipsButton'

function TipsSelector({ onSelect, isSelected }) {
  const tips = [
    { type: 'gear', text: 'Essential Gear' },
    { type: 'rules', text: 'Rules of the Road' },
    { type: 'emergency', text: 'Emergency Preparedness' },
  ]

  return (
    <SectionContainer>
      {tips.map((tip) => (
        <TipsButton
          key={tip.type}
          type={tip.type}
          isSelected={isSelected}
          onSelect={onSelect}
          text={tip.text}
        />
      ))}
    </SectionContainer>
  )
}

export default TipsSelector

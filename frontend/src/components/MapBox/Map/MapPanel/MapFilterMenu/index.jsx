import TypeButton from '../../../../trivias/TypeButton'
import { MapFilterWrapper } from './styles'
import incidentTypes from '../../../../../data/incidentTypes'

function MapFilterMenu() {

  return (
    <MapFilterWrapper>
      {incidentTypes.map((item) => (
        <TypeButton
          key={item.type}
          type={item.type}
          text={item.text}
        />
      ))}
    </MapFilterWrapper>
  )
}

export default MapFilterMenu

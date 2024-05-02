import { MapFilterWrapper } from './styles'
import incidentTypes from '../../../../../data/incidentTypes'
import FilterTypeButton from '../../../../trivias/TypeButtonMap'

function MapFilterMenu() {
  return (
    <MapFilterWrapper>
      {incidentTypes.map((item) => (
        <FilterTypeButton key={item.type} type={item.type} text={item.text} />
      ))}
    </MapFilterWrapper>
  )
}

export default MapFilterMenu

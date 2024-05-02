import { TypeMenuItem, TypeName, TypesIcon } from './styles'
import bike_theft from '../../../assets/icons/bike_theft.png'
import near_miss from '../../../assets/icons/near_miss.png'
import violations from '../../../assets/icons/violations.png'
import bike_accident from '../../../assets/icons/bike_accident.png'

function FilterTypeButton({ type, text }) {
  const icons = {
    bicycle_accident: bike_accident,
    bicycle_theft: bike_theft,
    near_miss: near_miss,
    violations: violations,
  }

  return (
    <TypeMenuItem>
      <TypesIcon src={icons[type]} />
      <TypeName>
        {text}
      </TypeName>
    </TypeMenuItem>
  )
}

export default FilterTypeButton

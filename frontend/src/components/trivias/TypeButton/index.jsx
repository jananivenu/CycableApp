import { TypeMenuItem, StyledText, TypesIcon } from './styles';
import bike_theft from '../../../assets/icons/bike_theft.png';
import near_miss from '../../../assets/icons/near_miss.png';
import violations from '../../../assets/icons/violations.png';
import bike_accident from '/assets/icons/bike_accident.png'

function TypeButton({ type, isSelected, onSelect, text }) {
  const icons = {
    bicycle_accident: bike_accident,
    bicycle_theft: bike_theft,
    near_miss: near_miss,
    violations: violations
  };

  return (
    <TypeMenuItem typeSelected={isSelected} onClick={() => onSelect(type)}>
      <TypesIcon typeSelected={isSelected} src={icons[type]} />
      <StyledText typeSelected={isSelected} selected={type === isSelected}>
        {text}
      </StyledText>
    </TypeMenuItem>
  );
}

export default TypeButton;



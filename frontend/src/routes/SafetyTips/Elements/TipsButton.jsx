import {
    TypeMenuItem,
    TypeName,
  } from '../../../components/trivias/TypeButton/styles'
  
  function TipsButton({ type, isSelected, onSelect, text }) {
    return (
      <TypeMenuItem typeSelected={isSelected} onClick={() => onSelect(type)}>
        <TypeName typeSelected={isSelected} selected={type === isSelected}>
          {text}
        </TypeName>
      </TypeMenuItem>
    )
  }
  
  export default TipsButton
  
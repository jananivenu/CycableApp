import {
  QuestionWrapper,
  MenuItems,
  MenuWrapper,
  TypesIcon,
  StyledText,
  Question,
  FormsWrapper,
} from './styles'
import bike_theft from '../../../assets/icons/bike_theft.png'
import near_miss from '../../../assets/icons/near_miss.png'
import violations from '../../../assets/icons/violations.png'
import bike_accident from '../../../assets/icons/bike_accident.png'
import { useState } from 'react'
import AccidentReport from './Bicycle_accident'
import TheftReport from './Theft'
import LegalReport from './Legal'
import { BasicForm } from '../../../styles/elements/forms'
// main component to render different create_report_types
const CreateReport = () => {
  const [type, setType] = useState('')
  const handleSelectType = (selectedType) => {
    setType(selectedType)
    console.log('selected type:', selectedType)
  }
  return (
    <BasicForm>
      <QuestionWrapper>
        <Question typeSelected={type !== ''}>
          What Would You Like To Report?
        </Question>
        <MenuWrapper>
          <MenuItems
            typeSelected={type !== ''}
            onClick={() => handleSelectType('bicycle_accident')}
          >
            <StyledText
              typeSelected={type !== ''}
              selected={type === 'bicycle_accident'}
            >
              Bicycle Accident
            </StyledText>
            <TypesIcon typeSelected={type !== ''} src={bike_accident} />
          </MenuItems>

          <MenuItems
            typeSelected={type !== ''}
            onClick={() => handleSelectType('bicycle_theft')}
          >
            <StyledText
              typeSelected={type !== ''}
              selected={type === 'bicycle_theft'}
            >
              Bicycle Theft
            </StyledText>
            <TypesIcon typeSelected={type !== ''} src={bike_theft} />
          </MenuItems>

          <MenuItems
            typeSelected={type !== ''}
            onClick={() => handleSelectType('near_miss')}
          >
            <StyledText
              typeSelected={type !== ''}
              selected={type === 'near_miss'}
            >
              Dangerous Locations
            </StyledText>
            <TypesIcon typeSelected={type !== ''} src={near_miss} />
          </MenuItems>

          <MenuItems
            typeSelected={type !== ''}
            onClick={() => handleSelectType('violations')}
          >
            <StyledText
              typeSelected={type !== ''}
              selected={type === 'violations'}
            >
              Violations{' '}
            </StyledText>
            <TypesIcon typeSelected={type !== ''} src={violations} />
          </MenuItems>
        </MenuWrapper>
      </QuestionWrapper>

      <FormsWrapper className="here render forms">
        {type === 'bicycle_accident' && (
          <AccidentReport type={'bicycle_accident'} />
        )}
        {type === 'bicycle_theft' && <TheftReport type={'bicycle_theft'} />}
        {/* {type === 'near_miss' && <NearMissReport />} */}
        {type === 'violations' && <LegalReport type={'violations'} />}
      </FormsWrapper>
    </BasicForm>
  )
}

export default CreateReport

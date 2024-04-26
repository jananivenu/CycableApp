import { useState } from 'react'
import { QuestionWrapper, FormsWrapper } from './styles'
import { BasicForm } from '../../../styles/elements/forms'

import IncidentTypeSelector from './Elements/IncidentTypeSelector'
import AccidentReport from './Bicycle_accident'
import TheftReport from './Theft'
import LegalReport from './Legal'
import NearMiss from './NearMiss'
import { StyledH2 } from '../../../styles/elements/typography'
import { MainContainer, SectionContainer } from '../../../styles'

const CreateReport = () => {
  const [incidentType, setIncidentType] = useState('')

  const handleSelectType = (selectedType) => {
    setIncidentType(selectedType)
    console.log('Selected type:', selectedType)
  }

  return (
    <MainContainer>
      <SectionContainer>
        <QuestionWrapper>
          <StyledH2>What Would You Like To Report?</StyledH2>
          <IncidentTypeSelector onSelect={handleSelectType} />
        </QuestionWrapper>
      </SectionContainer>
      <BasicForm>
        <FormsWrapper className="here render forms">
          {incidentType === 'bicycle_accident' && (
            <AccidentReport incident_type={'bicycle_accident'} />
          )}
          {incidentType === 'bicycle_theft' && (
            <TheftReport incident_type={'bicycle_theft'} />
          )}
          {incidentType === 'near_miss' && (
            <NearMiss incident_type={'near_miss'} />
          )}
          {incidentType === 'violations' && (
            <LegalReport incident_type={'violations'} />
          )}
        </FormsWrapper>
      </BasicForm>
    </MainContainer>
  )
}

export default CreateReport

// import {
//   QuestionWrapper,
//   MenuItems,
//   MenuWrapper,
//   TypesIcon,
//   StyledText,
//   Question,
//   FormsWrapper,
// } from './styles'
// import bike_theft from '../../../assets/icons/bike_theft.png'
// import near_miss from '../../../assets/icons/near_miss.png'
// import violations from '../../../assets/icons/violations.png'
// import bike_accident from '../../../assets/icons/bike_accident.png'
// import { useState } from 'react'
// import AccidentReport from './Bicycle_accident'
// import TheftReport from './Theft'
// import LegalReport from './Legal'
// import { BasicForm } from '../../../styles/elements/forms'
// import NearMiss from './NearMiss'
// // main component to render different create_report_types
// const CreateReport = () => {
//   const [incident_type, setType] = useState('')
//   const handleSelectType = (selectedType) => {
//     setType(selectedType)
//     console.log('selected type:', selectedType)
//   }
//   return (
//     <BasicForm>
//       <QuestionWrapper>
//         <Question typeSelected={incident_type !== ''}>
//           What Would You Like To Report?
//         </Question>
//         <MenuWrapper>
//           <MenuItems
//             typeSelected={incident_type !== ''}
//             onClick={() => handleSelectType('bicycle_accident')}
//           >
//             <StyledText
//               typeSelected={incident_type !== ''}
//               selected={incident_type === 'bicycle_accident'}
//             >
//               Bicycle Accident
//             </StyledText>
//             <TypesIcon
//               typeSelected={incident_type !== ''}
//               src={bike_accident}
//             />
//           </MenuItems>

//           <MenuItems
//             typeSelected={incident_type !== ''}
//             onClick={() => handleSelectType('bicycle_theft')}
//           >
//             <StyledText
//               typeSelected={incident_type !== ''}
//               selected={incident_type === 'bicycle_theft'}
//             >
//               Bicycle Theft
//             </StyledText>
//             <TypesIcon typeSelected={incident_type !== ''} src={bike_theft} />
//           </MenuItems>

//           <MenuItems
//             typeSelected={incident_type !== ''}
//             onClick={() => handleSelectType('near_miss')}
//           >
//             <StyledText
//               typeSelected={incident_type !== ''}
//               selected={incident_type === 'near_miss'}
//             >
//               Dangerous Locations
//             </StyledText>
//             <TypesIcon typeSelected={incident_type !== ''} src={near_miss} />
//           </MenuItems>

//           <MenuItems
//             typeSelected={incident_type !== ''}
//             onClick={() => handleSelectType('violations')}
//           >
//             <StyledText
//               typeSelected={incident_type !== ''}
//               selected={incident_type === 'violations'}
//             >
//               Violations{' '}
//             </StyledText>
//             <TypesIcon typeSelected={incident_type !== ''} src={violations} />
//           </MenuItems>
//         </MenuWrapper>
//       </QuestionWrapper>

//       <FormsWrapper className="here render forms">
//         {incident_type === 'bicycle_accident' && (
//           <AccidentReport incident_type={'bicycle_accident'} />
//         )}
//         {incident_type === 'bicycle_theft' && (
//           <TheftReport incident_type={'bicycle_theft'} />
//         )}
//         {incident_type === 'near_miss' && (
//           <NearMiss incident_type={'near_miss'} />
//         )}
//         {incident_type === 'violations' && (
//           <LegalReport incident_type={'violations'} />
//         )}
//       </FormsWrapper>
//     </BasicForm>
//   )
// }

// export default CreateReport

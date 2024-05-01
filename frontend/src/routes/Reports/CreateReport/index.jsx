import { useState } from 'react'
import { FormsWrapper } from './styles'

import IncidentTypeSelector from './Elements/IncidentTypeSelector'
import AccidentReport from './Bicycle_accident'
import TheftReport from './Theft'
import LegalReport from './Legal'
import NearMiss from './NearMiss'

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
        <IncidentTypeSelector onSelect={handleSelectType} />
      </SectionContainer>
      {/* <BasicForm> */}
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
      {/* </BasicForm> */}
    </MainContainer>
  )
}

export default CreateReport

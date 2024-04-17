import { MainContainer, SectionContainer } from '../../styles'
import ReportList from './ReportList'

const Profile = () => {
  const reports = [
    {
      id: 1,
      address: 'Maximilianstraße 16',
      date: '16.01.2024',
      comment:
        'Today, while riding on Maximilianstraße, a car suddenly pulled out from a side street without looking, causing a collision. Fortunately, there were no injuries, but the incident left me shaken. The car did not stop, and no police were called. We desperately need better enforcement of traffic laws to protect cyclists, especially at less visible intersections.',
      type: 'red',
    },
    {
      id: 2,
      address: 'Ostbahnhof',
      date: '10.03.2024',
      comment:
        'Near Ostbahnhof, there’s a wide pedestrian zone where bikes are technically not allowed but widely used by cyclists safely. Marking this as an official bike path could legalize a common practice and enhance safety.',
      type: 'blue',
    },
    {
      id: 3,
      address: 'Rosenheimer Straße',
      date: '25.03.2024',
      comment:
        'The crossing at Rosenheimer Straße lacks a designated bike path, but cyclists cross here due to its convenience. Officially recognizing this route could prevent cyclists from being penalized and improve traffic flow.',
      type: 'blue',
    },
  ]

  return (
    <MainContainer>
      <SectionContainer>
        <h2>Profile Page — Name</h2>
      </SectionContainer>
      <SectionContainer>
        <h3>Reports</h3>
        <ReportList reports={reports} />
      </SectionContainer>
    </MainContainer>
  )
}

export default Profile

import { MainContainer, SectionContainer } from '../../styles'
import {
  ProfileAbout,
  ProfileCover,
  ProfileGridContainer,
  ProfilePicture,
} from './styles'

import ReportList from './ReportList'
import coverBg from '../../assets/photos/ballet.png'
import avatar from '../../assets/photos/pavlova.png'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../styles/elements/typography'
import { useState, useEffect } from 'react'
import { getMyUserDatas } from '../../axios/UserData'

const UserProfile = () => {

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

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyUserDatas()
        setUserData(data)
      } catch (error) {
        console.error('Error fetching user data: ', error)
      }
    }

    fetchData()
  }, [])

  if (!userData) {
    return <div>Loading...</div> // or your custom loading component
  }

  return (
    <MainContainer>
      <ProfileCover img={ userData.cover_photo || coverBg} />
      <ProfileGridContainer>
        <ProfilePicture src={ userData.avatar || avatar} />
        <ProfileAbout>
          <StyledH2>{userData.first_name} {userData.last_name}</StyledH2>
          <LeadParagraph>
          {userData.profile_description}
          </LeadParagraph>
          <p>Lives in {userData.location}.</p>
          <p>Member since {new Date(userData.joined_date).toLocaleDateString()} </p>
        </ProfileAbout>
      </ProfileGridContainer>

      <SectionContainer>
        <StyledH3>Reports</StyledH3>
        <ReportList reports={reports} />
      </SectionContainer>
    </MainContainer>
  )
}

export default UserProfile

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
import { AccentButton } from '../../styles/elements/buttons'
import { useState, useEffect } from 'react'
import { getMyUserDatas } from '../../axios/UserData'
import { formatDate } from '../../utils/formatDate'
import { Link } from 'react-router-dom'
import AnimatedBikeLoading from '../trivias/Loading'

const UserProfile = () => {
  const [userData, setUserData] = useState(null)
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyUserDatas()
        console.log(data)
        setUserData(data)
        localStorage.setItem('user', JSON.stringify(data))

      } catch (error) {
        console.error('Error fetching user data: ', error)
      }
    }

    fetchData()
  }, [])

  if (!userData) {
    return <AnimatedBikeLoading />
  }

  return (
    <MainContainer>
      <ProfileCover img={userData.cover_photo || coverBg} />
      <ProfileGridContainer>
        <ProfilePicture src={userData.avatar || avatar} />
        <AccentButton as={Link} to="/profile/edit">Edit Profile</AccentButton>
        <ProfileAbout>
          <StyledH2>
            {userData.first_name} {userData.last_name}
          </StyledH2>
          <LeadParagraph>{userData.profile_description}</LeadParagraph>
          <p>Lives in {userData.location}.</p>
          <p>Member since {formatDate(userData.joined_date)} </p>
        </ProfileAbout>
      </ProfileGridContainer>

      <SectionContainer>
        <StyledH3>Reports</StyledH3>
        <ReportList userId={userData.id} />
      </SectionContainer>
    </MainContainer>
  )
}

export default UserProfile

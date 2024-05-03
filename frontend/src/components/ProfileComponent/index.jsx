import { MainContainer, SectionContainer } from '../../styles'
import {
  ProfileAbout,
  ProfileCover,
  ProfileGridContainer,
  ProfilePicture,
  ProfilePictureWrapper,
} from './styles'

import coverBg from '../../assets/photos/default.png'
import avatar from '../../assets/icons/user-cl.png'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../styles/elements/typography'
import { SquareButtonLink } from '../../styles/elements/buttons'
import { useState, useEffect } from 'react'
import { getMyUserDatas } from '../../axios/UserData'
import { formatDate } from '../../utils/formatDate'
import AnimatedBikeLoading from '../trivias/Loading'
import UserReportList from './ReportList'
import { TbId } from "react-icons/tb";

const UserProfile = () => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMyUserDatas()
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
        <ProfilePictureWrapper>
          <ProfilePicture src={userData.avatar || avatar} />
          <div>
            <SquareButtonLink to="/profile/edit">
              <TbId /> Edit Profile
            </SquareButtonLink>
          </div>
        </ProfilePictureWrapper>
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
        <UserReportList userId={userData.id} />
      </SectionContainer>
    </MainContainer>
  )
}

export default UserProfile

import { MainContainer, SectionContainer } from '../../../styles'
import {
  ProfileAbout,
  ProfileCover,
  ProfileGridContainer,
  ProfilePicture,
  ProfilePictureWrapper,
} from '../styles'
import coverBg from '../../../assets/photos/ballet.png'
import avatar from '../../../assets/icons/user-cl.png'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../styles/elements/typography'
import { useState, useEffect } from 'react'
import { getSpecificUserData } from '../../../axios/UserData'
import { formatDate } from '../../../utils/formatDate'
import { useParams } from 'react-router-dom'
import AnimatedBikeLoading from '../../trivias/Loading'
import UserReportList from '../ReportList'

const SpecificUserProfile = () => {
  const [userData, setUserData] = useState(null)
  const userID = useParams().user_id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSpecificUserData(userID)
        setUserData(data)
      } catch (error) {
        console.error('Error fetching user data: ', error)
      }
    }

    fetchData()
  }, [userID])

  if (!userData) {
    return <AnimatedBikeLoading />
  }

  return (
    <MainContainer>
      <ProfileCover img={userData.cover_photo || coverBg} />
      <ProfileGridContainer>
        <ProfilePictureWrapper>
          <ProfilePicture src={userData.avatar || avatar} />
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
        <UserReportList userId={userID} />
      </SectionContainer>
    </MainContainer>
  )
}

export default SpecificUserProfile

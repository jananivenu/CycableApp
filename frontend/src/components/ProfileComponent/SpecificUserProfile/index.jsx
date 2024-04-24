import { MainContainer, SectionContainer } from '../../../styles'
import {
  ProfileAbout,
  ProfileCover,
  ProfileGridContainer,
  ProfilePicture,
} from '../styles'
import coverBg from '../../../assets/photos/ballet.png'
import avatar from '../../../assets/photos/pavlova.png'
import { LeadParagraph, StyledH2 } from '../../../styles/elements/typography'
import { useState, useEffect } from 'react'
import { getSpecificUserData } from '../../../axios/UserData'
import { formatDate } from '../../../utils/formatDate'
import { useParams } from 'react-router-dom'

const SpecificUserProfile = () => {
  const [userData, setUserData] = useState(null)
  console.log(useParams())
  const userID = useParams().user_id
  console.log(userID)

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
    return <div>Loading...</div>
  }

  return (
    <MainContainer>
      <ProfileCover img={userData.cover_photo || coverBg} />
      <ProfileGridContainer>
        <ProfilePicture src={userData.avatar || avatar} />
        <ProfileAbout>
          <StyledH2>
            {userData.first_name} {userData.last_name}
          </StyledH2>
          <LeadParagraph>{userData.profile_description}</LeadParagraph>
          <p>Lives in {userData.location}.</p>
          <p>Member since {formatDate(userData.joined_date)} </p>
        </ProfileAbout>
      </ProfileGridContainer>
    </MainContainer>
  )
}

export default SpecificUserProfile

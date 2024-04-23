import React from 'react'
import { MainContainer } from '../../../styles'
import {
  ProfileAbout,
  ProfileCover,
  ProfileGridContainer,
  ProfilePicture,
} from '../styles'
import {
  LeadParagraph,
  StyledH2,
  StyledH3,
} from '../../../styles/elements/typography'
import {
  AuthForm,
  InputGroup,
  QuestionGroup,
} from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import { useState, useEffect } from 'react'
import coverBg from '../../../assets/photos/ballet.png'
import avatar from '../../../assets/photos/pavlova.png'
import { Link } from 'react-router-dom'
import { formatDate } from '../../../utils/formatDate'

import { getMyUserDatas } from '../../../axios/UserData'
import { BasicForm } from '../../../styles/elements/forms'
import { updateUserData } from '../../../axios/UserData'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserObject } from '../../../store/slices/userSlice'
import AvatarUpload from './EditAvatar/editAvatar'
import DeleteAccount from './DeleteProfile'
import CoverUpload from './EditCover'

const EditProfile = () => {
  const storedUser = useSelector((state) => state.user.user)
  console.log(storedUser)
  const [userData, setUserData] = useState(null)

  const [first_name, setFirstName] = useState(storedUser.first_name)
  const [last_name, setLastName] = useState(storedUser.last_name)
  const [location, setLocation] = useState(storedUser.location)
  const [profile_description, setProfileDescription] = useState(
    storedUser.profile_description,
  )
  const [gender, setGender] = useState(storedUser.gender)
  const [username, setUsername] = useState(storedUser.username)
  const [birth_date, setBirthdate] = useState(storedUser.birth_date)

  const [cover_photo, setCoverPhote] = useState(storedUser.cover_photo)
  const [userAvatar, setUserAvatar] = useState(storedUser.avatar)

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [genderUser, setGenderUser] = useState(storedUser.gender)

  useEffect(() => {
    // Update the avatar in the stored user object whenever userAvatar changes
    dispatch(setUserObject({ ...storedUser, avatar: userAvatar }))
  }, [userAvatar])

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const data = await getMyUserDatas()
  //         setUserData(data)
  //       } catch (error) {
  //         console.error('Error fetching user data: ', error)
  //       }
  //     }

  //     fetchData()
  //   }, [])

  //   if (!userData) {
  //     return <div>Loading...</div>
  //   }

  const onSubmitChanges = async (e) => {
    e.preventDefault()
    const data = {
      first_name: first_name,
      last_name: last_name,
      profile_description: profile_description,
      location: location,
      gender: gender,
      username: username,
      birth_date: birth_date,
    }

    try {
      const updatedData = await updateUserData(data)
      console.log(updatedData)
      localStorage.setItem('user', JSON.stringify(updatedData))
      dispatch(setUserObject(updatedData))

      // Assuming '/profile/me/' is the correct path to the user's profile
      navigate('/profile/me/')
    } catch (error) {
      console.error('Error updating user data: ', error)
    }
  }

  return (
    <MainContainer>
      <ProfileCover img={cover_photo || coverBg} />
      <ProfileGridContainer>
        <ProfilePicture src={userAvatar || avatar} />
        <BasicForm onSubmit={onSubmitChanges}>
          <label>
            Username:
            <input
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <label>
            First Name:
            <input
              name="first_name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              name="last_name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Location:
            <input
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                value={genderUser}
                onChange={(e) => setGenderUser(e.target.value)}
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                <option value="D">Diverse</option>
                <option value="N">Prefer not to say</option>
              </select>
            </InputGroup>
          </QuestionGroup>

          <label>
            Description:
            <textarea
              name="profile_description"
              value={profile_description}
              onChange={(e) => setProfileDescription(e.target.value)}
            />
          </label>
          <label>
            Birthdate:
            <input
              type="date"
              name="birthdate"
              value={birth_date}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>
          <AccentButton type="submit">Save Changes</AccentButton>
        </BasicForm>
        <BasicForm>
          <AvatarUpload setUserAvatar={setUserAvatar} />
          <DeleteAccount />
          <CoverUpload setCoverPhoto={setCoverPhote} />
        </BasicForm>
      </ProfileGridContainer>
    </MainContainer>
  )
}

export default EditProfile

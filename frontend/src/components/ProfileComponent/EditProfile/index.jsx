import { MainContainer } from '../../../styles'
import {
  EditProfileButtons,
  EditProfileForm,
  ProfileCover,
  ProfileGridContainer,
  ProfilePicture,
  ProfilePictureWrapper,
} from '../styles'
import { StyledH2 } from '../../../styles/elements/typography'
import {
  ErrorMessage,
  InputGroup,
  QuestionGroup,
} from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import { useState, useEffect } from 'react'
import coverBg from '../../../assets/photos/default.png'
import avatar from '../../../assets/icons/user-cl.png'

import { updateUserData } from '../../../axios/UserData'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserObject } from '../../../store/slices/userSlice'
import AvatarUpload from './EditAvatar/editAvatar'
import DeleteAccount from './DeleteProfile'
import CoverUpload from './EditCover'
import FormField from './FormField'

const EditProfile = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const [error, setError] = useState(null)

  const [first_name, setFirstName] = useState(storedUser.first_name)
  const [last_name, setLastName] = useState(storedUser.last_name)
  const [location, setLocation] = useState(storedUser.location)
  const [profile_description, setProfileDescription] = useState(
    storedUser.profile_description,
  )
  const [gender, setGender] = useState(storedUser.gender)
  const [username, setUsername] = useState(storedUser.username)
  const [birth_date, setBirthdate] = useState(storedUser.birth_date)

  const [cover_photo, setCoverPhoto] = useState(storedUser.cover_photo)
  const [userAvatar, setUserAvatar] = useState(storedUser.avatar)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //const [genderUser, setGenderUser] = useState(storedUser.gender)

  useEffect(() => {
    // Update the avatar in the stored user object whenever userAvatar changes
    dispatch(setUserObject(JSON.parse(localStorage.getItem('user'))))
  }, [])


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
      localStorage.setItem('user', JSON.stringify(updatedData))
      dispatch(setUserObject(updatedData))
      navigate('/profile/me/')
    } catch (error) {
      setError(error.response.data.username[0])
      console.error('Error updating user data: ', error)
    }
  }

  return (
    <MainContainer>
      <ProfileCover img={cover_photo || coverBg} />
      <ProfileGridContainer>
        <ProfilePictureWrapper>
          <ProfilePicture src={userAvatar || avatar} />

          <EditProfileButtons>
            <AvatarUpload setUserAvatar={setUserAvatar} />
            <CoverUpload setCoverPhoto={setCoverPhoto} />
            <DeleteAccount />
          </EditProfileButtons>
        </ProfilePictureWrapper>

        <EditProfileForm onSubmit={onSubmitChanges}>
          <StyledH2>Edit Profile</StyledH2>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="username">Username: </label>
              <input
                id="username"
                name="username"
                value={username}
                onChange={(e) => {
                  const inputValue = e.target.value
                  // Remove spaces from the input value
                  const noSpaces = inputValue.replace(/\s/g, '')
                  setUsername(noSpaces)
                }}
              />
              {error && (
                <ErrorMessage style={{ color: 'red' }}>{error}</ErrorMessage>
              )}
            </InputGroup>
          </QuestionGroup>

          <FormField
            label="First Name"
            id="firstname"
            name="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormField
            label="Last Name"
            id="lastname"
            name="last_name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormField
            label="Location"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <QuestionGroup>
            <InputGroup>
              <label htmlFor="gender">Gender:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="description">About me:</label>
              <textarea
                id="description"
                name="profile_description"
                value={profile_description}
                onChange={(e) => setProfileDescription(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup>
          <QuestionGroup>
            <InputGroup>
              <label htmlFor="birthdate">Birthdate:</label>
              <input
                id="birthdate"
                type="date"
                name="birthdate"
                value={birth_date}
                onChange={(e) => setBirthdate(e.target.value)}
              />
            </InputGroup>
          </QuestionGroup>
          <AccentButton type="submit">Save Changes</AccentButton>
        </EditProfileForm>
      </ProfileGridContainer>
    </MainContainer>
  )
}


export default EditProfile

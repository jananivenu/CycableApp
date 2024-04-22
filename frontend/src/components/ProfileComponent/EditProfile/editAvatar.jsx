import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserObject } from '../../../store/slices/userSlice'
import { updateUserData } from '../../../axios/UserData'
import { AccentButton } from '../../../styles/elements/buttons'

const AvatarUpload = ({ setUserAvatar }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const dispatch = useDispatch()

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleFileUpload = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append('avatar', selectedFile)

    try {
      const updatedUser = await updateUserData(formData)
      dispatch(setUserObject(updatedUser))
      setUserAvatar(updatedUser.avatar) // Update the local state with the new avatar URL
    } catch (error) {
      console.error('Error uploading file: ', error)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <AccentButton onClick={handleFileUpload}>Upload New Avatar</AccentButton>
    </div>
  )
}

export default AvatarUpload

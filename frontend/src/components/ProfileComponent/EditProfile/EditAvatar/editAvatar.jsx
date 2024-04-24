import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAvatar, setUserObject } from '../../../../store/slices/userSlice'
import { updateUserData } from '../../../../axios/UserData'
import { AccentButton } from '../../../../styles/elements/buttons'
import { ErrorMessage } from '../../../../styles/elements/forms'

const AvatarUpload = ({ setUserAvatar }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState(null)
  const dispatch = useDispatch()

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    setError(null)
  }

  const handleFileUpload = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append('avatar', selectedFile)

    try {
      const updatedUser = await updateUserData(formData)
      dispatch(setUserObject(updatedUser))
      localStorage.setItem('user', JSON.stringify(updatedUser))

      setUserAvatar(updatedUser.avatar) // Update the local state with the new avatar URL
    } catch (error) {
      console.error('Error uploading file: ', error)
      console.log(error.response)
      if (error && error.message) {
        setError('Wrong file format or file too large') // Set the error state if there's an error response
      }
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <AccentButton onClick={handleFileUpload}>Upload New Avatar</AccentButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}{' '}
      {/* Display the error message if there's an error */}
    </div>
  )
}

export default AvatarUpload

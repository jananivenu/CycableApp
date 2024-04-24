import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserObject } from '../../../../store/slices/userSlice'
import { updateUserData } from '../../../../axios/UserData' 
import { AccentButton } from '../../../../styles/elements/buttons' 

const CoverUpload = ({ setCoverPhoto }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const dispatch = useDispatch()

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleFileUpload = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append('cover_photo', selectedFile)

    try {
      const updatedUser = await updateUserData(formData)
      dispatch(setUserObject(updatedUser))
      setCoverPhoto(updatedUser.cover_photo) // Update the local state with the new cover photo URL
    } catch (error) {
      console.error('Error uploading file: ', error)
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <AccentButton onClick={handleFileUpload}>Upload New Cover Photo</AccentButton>
    </div>
  )
}

export default CoverUpload

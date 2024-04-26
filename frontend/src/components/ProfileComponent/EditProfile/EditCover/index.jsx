import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUserObject } from '../../../../store/slices/userSlice'
import { updateUserData } from '../../../../axios/UserData'
import { SquareButton } from '../../../../styles/elements/buttons'
import { BasicForm, ErrorMessage } from '../../../../styles/elements/forms'
import Modal from '../Modal'
import { TbPhotoSquareRounded } from "react-icons/tb";

const CoverUpload = ({ setCoverPhoto }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const dispatch = useDispatch()

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
    setError(null)
  }

  const handleFileUpload = async (event) => {
    event.preventDefault()
    let formData = new FormData()
    formData.append('cover_photo', selectedFile)

    try {
      const updatedUser = await updateUserData(formData)
      dispatch(setUserObject(updatedUser))
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setCoverPhoto(updatedUser.cover_photo)
      setIsModalOpen(false)
    } catch (error) {
      console.error('Error uploading file: ', error)
      setError('Wrong file format or file too large')
    }
  }

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <>
      <SquareButton onClick={toggleModal}>
        <TbPhotoSquareRounded /> New Cover
      </SquareButton>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BasicForm>
            <input type="file" onChange={handleFileChange} />
            <SquareButton onClick={handleFileUpload}>Upload</SquareButton>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </BasicForm>
        </Modal>
      )}
    </>
  )
}

export default CoverUpload

// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { setUserObject } from '../../../../store/slices/userSlice'
// import { updateUserData } from '../../../../axios/UserData'
// import { AccentButton, SquareButton } from '../../../../styles/elements/buttons'
// import { ErrorMessage } from '../../../../styles/elements/forms'
// import { TbPhotoSquareRounded } from 'react-icons/tb'

// const CoverUpload = ({ setCoverPhoto }) => {
//   const [selectedFile, setSelectedFile] = useState(null)
//   const [error, setError] = useState(null)

//   const dispatch = useDispatch()

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0])
//     setError(null)
//   }

//   const handleFileUpload = async (event) => {
//     event.preventDefault()
//     let formData = new FormData()
//     formData.append('cover_photo', selectedFile)

//     try {
//       const updatedUser = await updateUserData(formData)
//       dispatch(setUserObject(updatedUser))
//       localStorage.setItem('user', JSON.stringify(updatedUser))

//       setCoverPhoto(updatedUser.cover_photo) // Update the local state with the new cover photo URL
//     } catch (error) {
//       console.error('Error uploading file: ', error)
//       console.log(error.response)
//       if (error && error.message) {
//         setError('Wrong file format or file too large') // Set the error state if there's an error response
//       }
//     }
//   }

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} />
//       <SquareButton onClick={handleFileUpload}>
//         <TbPhotoSquareRounded />
//         Change Cover
//       </SquareButton>
//       {error && <ErrorMessage>{error}</ErrorMessage>}{' '}
//       {/* Display the error message if there's an error */}
//     </div>
//   )
// }

// export default CoverUpload

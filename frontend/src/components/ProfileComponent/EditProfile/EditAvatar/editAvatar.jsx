import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAvatar, setUserObject } from '../../../../store/slices/userSlice'
import { updateUserData } from '../../../../axios/UserData'
import { SquareButton } from '../../../../styles/elements/buttons'
import {
  BasicForm,
  ErrorMessage,
  InputGroup,
} from '../../../../styles/elements/forms'
import Modal from '../Modal'
import { TbUserSquareRounded } from "react-icons/tb";


const AvatarUpload = ({ setUserAvatar }) => {
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
    formData.append('avatar', selectedFile)

    try {
      const updatedUser = await updateUserData(formData)
      dispatch(setUserObject(updatedUser))
      localStorage.setItem('user', JSON.stringify(updatedUser))
      setUserAvatar(updatedUser.avatar)
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
        <TbUserSquareRounded /> New Avatar
      </SquareButton>
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <BasicForm>
            <InputGroup>
              <input type="file" onChange={handleFileChange} />
              <SquareButton onClick={handleFileUpload}>Upload</SquareButton>
              {error && <ErrorMessage>{error}</ErrorMessage>}
            </InputGroup>
          </BasicForm>
        </Modal>
      )}
    </>
  )
}

export default AvatarUpload

// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { setAvatar, setUserObject } from '../../../../store/slices/userSlice'
// import { updateUserData } from '../../../../axios/UserData'
// import { SquareButton } from '../../../../styles/elements/buttons'
// import {
//   BasicForm,
//   ErrorMessage,
//   InputGroup,
// } from '../../../../styles/elements/forms'
// import { TbPhotoSquareRounded } from 'react-icons/tb'

// const AvatarUpload = ({ setUserAvatar }) => {
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
//     formData.append('avatar', selectedFile)

//     try {
//       const updatedUser = await updateUserData(formData)
//       dispatch(setUserObject(updatedUser))
//       localStorage.setItem('user', JSON.stringify(updatedUser))

//       setUserAvatar(updatedUser.avatar) // Update the local state with the new avatar URL
//     } catch (error) {
//       console.error('Error uploading file: ', error)
//       console.log(error.response)
//       if (error && error.message) {
//         setError('Wrong file format or file too large') // Set the error state if there's an error response
//       }
//     }
//   }

//   return (
//     <BasicForm>
//       <InputGroup>
//         <input type="file" onChange={handleFileChange} />
//         <SquareButton onClick={handleFileUpload}>
//           <TbPhotoSquareRounded /> Change Avatar
//         </SquareButton>
//         {error && <ErrorMessage>{error}</ErrorMessage>}{' '}
//         {/* Display the error message if there's an error */}
//       </InputGroup>
//     </BasicForm>
//   )
// }

// export default AvatarUpload

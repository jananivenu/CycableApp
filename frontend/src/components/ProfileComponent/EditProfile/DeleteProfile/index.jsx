import React from 'react'
import { AccentButton } from '../../../../styles/elements/buttons'
import { deleteUser } from '../../../../axios/UserData'
import { useDispatch } from 'react-redux'
import { logoutUser, setUserObject } from '../../../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const DeleteAccount = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = async () => {
    try {
      const data = await deleteUser()
      console.log(data)
      dispatch(logoutUser)
      navigate('/')
    } catch (error) {
      console.error('Error deleting user: ', error)
    }
  }

  return (
    <AccentButton onClick={() => handleDelete()}>Delete Account</AccentButton>
  )
}

export default DeleteAccount

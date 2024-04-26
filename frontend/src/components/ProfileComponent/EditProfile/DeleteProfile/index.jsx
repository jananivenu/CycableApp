import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteUser } from '../../../../axios/UserData'
import { logoutUser } from '../../../../store/slices/userSlice'
import { SquareButtonDelete } from '../../../../styles/elements/buttons'

const DeleteAccount = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = async (e) => {
    e.preventDefault()

    const confirmDelete = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone.',
    )

    if (confirmDelete) {
      try {
        const data = await deleteUser()
        console.log(data)
        dispatch(logoutUser())
        navigate('/')
      } catch (error) {
        console.error('Error deleting user: ', error)
      }
    }
  }

  return (
    <SquareButtonDelete onClick={handleDelete}>
      Delete Account
    </SquareButtonDelete>
  )
}

export default DeleteAccount

import { AccentButton } from '../../../../styles/elements/buttons'
import { deleteUser } from '../../../../axios/UserData'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../../../../store/slices/userSlice'
import { useNavigate } from 'react-router-dom'

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

  return <AccentButton onClick={handleDelete}>Delete Account</AccentButton>
}

export default DeleteAccount

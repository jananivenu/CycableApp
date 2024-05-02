import { useDispatch } from 'react-redux'
import { deleteReportAsync } from '../../../../../store/slices/reportsSlice'
import { SquareButtonDelete } from '../../../../../styles/elements/buttons'
import { TbTrash } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const DeleteReport = ({ reportId, onSuccess }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this report? This action cannot be undone.',
    )

    if (confirmDelete) {
      try {
        await dispatch(deleteReportAsync(reportId))
        onSuccess() // Callback to inform parent component about successful deletion
        navigate('/profile/me') // Navigate to profile page after successful deletion
      } catch (error) {
        console.error('Error deleting report:', error)
        // Handle error deletion
      }
    }
  }

  return (
    <SquareButtonDelete onClick={handleDelete}>
      <TbTrash /> Delete Report
    </SquareButtonDelete>
  )
}

export default DeleteReport

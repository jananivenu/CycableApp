import { CaseBodyContainer } from './styles'
import CaseRow from './Elements/CaseRow'
import { ArticleComment } from '../../styles/elements/articles'
import { formatUserName } from '../../utils/formatUserName'
import { SquareButtonDelete } from '../../styles/elements/buttons.jsx'
import { deleteCommentsAsync } from '../../store/slices/commentsSlice.js'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CaseComment({ author, text, commentId }) {
  const authorName = formatUserName(author)
  const [isDeleting, setIsDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState(null)
  const dispatch = useDispatch()
  const loggedInUserId = useSelector((state) => state.user.user.id)
  const isUserAuthor = author.id === loggedInUserId

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this comment?',
    )

    if (!confirmDelete) {
      return // If user cancels, do not proceed with deletion
    }
    setIsDeleting(true)
    try {
      await dispatch(deleteCommentsAsync(commentId))
    } catch (error) {
      setDeleteError('Failed to delete comment. Please try again.')
      console.error('Error deleting comment:', error)
    } finally {
      setIsDeleting(false)
    }
  }
  return (
    <ArticleComment>
      <CaseBodyContainer>
        <CaseRow type="user" content={authorName} />
        <CaseRow type="comment" content={text} commentId={commentId} />
        <div></div>
        {isUserAuthor && (
          <SquareButtonDelete onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? 'Deleting...' : 'Delete'}
          </SquareButtonDelete>
        )}
      </CaseBodyContainer>
    </ArticleComment>
  )
}

export default CaseComment

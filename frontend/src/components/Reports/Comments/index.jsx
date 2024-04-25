import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCommentsAsync } from '../../../store/slices/commentsSlice'
import { SectionContainer } from '../../../styles'
import { StyledH3 } from '../../../styles/elements/typography'
import CommentList from './CommentList'
import ToggleInputForm from './CommentForm'

function Comments() {
  const { reportId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (reportId) {
      dispatch(fetchCommentsAsync(reportId))
    }
  }, [dispatch, reportId])

  const comments = useSelector((state) => state.comments.comments)
  const status = useSelector((state) => state.comments.status)
  const error = useSelector((state) => state.comments.error)

  return (
    <SectionContainer>
      <StyledH3>Comments</StyledH3>
      <ToggleInputForm />
      <CommentList comments={comments} status={status} error={error} />
    </SectionContainer>
  )
}

export default Comments

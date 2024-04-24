import { SectionContainer } from '../../../styles'
import { StyledH3 } from '../../../styles/elements/typography'
import CaseComment from '../../CasePreview/CaseComment'
import MasonryContainer from '../../wrappers/MasonryContainer'
import ToggleInputForm from '../CommentForm'

function CommentList({ comments, status, error }) {
  if (status === 'loading') {
    return <p>Loading comments...</p>
  }

  if (error) {
    return <p>An error occurred: {error}</p>
  }

  return (
    <SectionContainer>
      <StyledH3>Comments</StyledH3>
      
      <ToggleInputForm />

      {comments && comments.length > 0 ? (
        <MasonryContainer>
          {comments.map((comment) => (
            <CaseComment
              key={comment.id}
              author={comment.author}
              text={comment.text}
            />
          ))}
        </MasonryContainer>
      ) : (
        <p>No comments yet.</p>
      )}
    </SectionContainer>
  )
}

export default CommentList

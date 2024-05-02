import CaseComment from '../../../CasePreview/CaseComment'
import AnimatedBikeLoading from '../../../trivias/Loading'
import MasonryContainer from '../../../wrappers/MasonryContainer'

function CommentList({ comments, status, error }) {
  if (status === 'loading') {
    return <AnimatedBikeLoading />
  }

  if (error) {
    return <p>An error occurred: {error}</p>
  }

  return (
    <>
      {comments && comments.length > 0 ? (
        <MasonryContainer>
          {comments.map((comment) => (
            <CaseComment
              key={comment.id}
              commentId={comment.id}
              author={comment.author}
              text={comment.text}
            />
          ))}
        </MasonryContainer>
      ) : (
        <p>No comments yet.</p>
      )}
    </>
  )
}

export default CommentList

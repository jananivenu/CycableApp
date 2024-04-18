import CaseComment from '../../../components/CasePreview/CaseComment'
import MasonryContainer from '../../../components/wrappers/MasonryContainer'

function CommentList({ comments }) {
  return (
    <MasonryContainer>
      {comments.map((comment) => (
        <CaseComment
          key={comment.id}
          userName={comment.userName}
          comment={comment.comment}
        />
      ))}
    </MasonryContainer>
  )
}

export default CommentList

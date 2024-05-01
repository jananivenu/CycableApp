import { CaseBodyContainer } from './styles'
import CaseRow from './Elements/CaseRow'
import { ArticleComment } from '../../styles/elements/articles'
import { formatUserName } from '../../utils/formatUserName'
import {SquareButtonDelete} from "../../styles/elements/buttons.jsx";
import {deleteCommentsAsync} from "../../store/slices/commentsSlice.js";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

function CaseComment({ author, text, commentId }) {
  const authorName = formatUserName(author)
    const [isDeleting, setIsDeleting] = useState(false);
  const [deleteError, setDeleteError] = useState(null);
  const dispatch = useDispatch();
  const UserLoggedIn = useSelector((state) => state.user.isLoggedIn)
  const loggedInUserId = useSelector((state) => state.user.user.id)
  const isUserAuthor = author.id === loggedInUserId;
 console.log("Author ID:", author.id);
  console.log("Logged In User ID:", loggedInUserId);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      console.log('Deleting comment with commentId:', commentId);
      // Dispatch deleteCommentsAsync action
      await dispatch(deleteCommentsAsync(commentId));
      // Update UI or perform any other necessary actions upon successful deletion
      // For example, you can remove the comment from the UI
    } catch (error) {
      setDeleteError('Failed to delete comment. Please try again.');
      console.error('Error deleting comment:', error);
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <ArticleComment>
      <CaseBodyContainer>
        <CaseRow type="user" content={authorName} />
        <CaseRow type="comment" content={text} commentId={commentId}/>
        {isUserAuthor && ( <SquareButtonDelete onClick={handleDelete} disabled={isDeleting} >
              {isDeleting ? 'Deleting...' : 'Delete'}
             </SquareButtonDelete>
        )}
      </CaseBodyContainer>
    </ArticleComment>
  )
}

export default CaseComment

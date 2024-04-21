import CaseComment from '../../../components/CasePreview/CaseComment'
import MasonryContainer from '../../../components/wrappers/MasonryContainer'

function CommentList() {

  const comments = [
    {
      id: 1,
      userName: 'Rudolf Nureyev',
      comment:
        "It seems like every week there's a new incident on Maximilian-straße. We need a dedicated bike path there, it's overdue!",
      dateTime: '2024-01-12 14:23:45',
    },
    {
      id: 2,
      userName: 'Vaslav Nijinsky',
      comment:
        'This is becoming too common around there. We should petition for better bike lanes and clearer road markings on Maximilianstraße.',
      dateTime: '2024-02-05 18:09:32',
    },
    {
      id: 3,
      userName: 'Isadora Duncan',
      comment: "That's awful, stay safe!",
      dateTime: '2024-03-21 09:17:58',
    },
    {
      id: 4,
      userName: 'Lucia Lacarra',
      comment: 'Just last month, a car almost sideswiped me there.',
      dateTime: '2024-03-28 16:45:12',
    },
    {
      id: 5,
      userName: 'Margot Fonteyn',
      comment:
        'I had a similar fright not long ago right on Maximilianstraße. It was early evening, and a car just zoomed past, barely missing me as I tried to cross at a quieter intersection. The shock of it really stayed with me for days.',
      dateTime: '2024-04-04 20:34:19',
    },
  ]


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

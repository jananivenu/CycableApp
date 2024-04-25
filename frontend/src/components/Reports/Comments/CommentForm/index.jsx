import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  addCommentAsync,
  fetchCommentsAsync,
} from '../../../../store/slices/commentsSlice'
import FormUI from './FormUI'

const ToggleInputForm = () => {
  const [showForm, setShowForm] = useState(false)
  const [inputText, setInputText] = useState('')
  const [error, setError] = useState('')

  const dispatch = useDispatch()
  const { reportId } = useParams()

  const handleToggleClick = () => {
    setShowForm(!showForm)
    setError('')
  }

  const handleInputChange = (event) => {
    setInputText(event.target.value)
    if (error) setError('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!inputText.trim()) {
      setError('This field shouldn’t be empty.')
    } else {
      const commentData = { text: inputText }
      dispatch(addCommentAsync({ reportId, commentData }))
        .then(() => {
          dispatch(fetchCommentsAsync(reportId))
        })
        .catch((error) => {
          setError('Failed to add comment. Please try again.')
          console.error('Error adding comment:', error)
        })

      setInputText('')
      setShowForm(false)
    }
  }

  return (
    <FormUI
      showForm={showForm}
      inputText={inputText}
      onToggleClick={handleToggleClick}
      onInputChange={handleInputChange}
      onSubmit={handleSubmit}
    />
  )
}

export default ToggleInputForm

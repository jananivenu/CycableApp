import { useState } from 'react'
import { InputGroup } from '../../../../styles/elements/forms'

const Description = () => {
  const [description, setDescription] = useState('')

  return (
    <InputGroup>
      <textarea
        id="description"
        placeholder="More details..."
        value={description}
        required
      ></textarea>
    </InputGroup>
  )
}

export default Description

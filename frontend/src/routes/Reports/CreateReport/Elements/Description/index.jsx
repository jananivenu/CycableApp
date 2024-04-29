import { InputGroup } from '../../../../../styles/elements/forms'

function Description({ value, onChange }) {
  return (
    <InputGroup>
      <textarea
        id="description"
        placeholder="More details..."
        value={value}
        onChange={onChange}
        required
      />
    </InputGroup>
  )
}

export default Description

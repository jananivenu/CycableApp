import { InputGroup, QuestionGroup } from '../../../../styles/elements/forms'

const FormField = ({ label, id, name, value, onChange }) => {
  return (
    <QuestionGroup>
      <InputGroup>
        <label htmlFor={id}>{label}: </label>
        <input id={id} name={name} value={value} onChange={onChange} />
      </InputGroup>
    </QuestionGroup>
  )
}

export default FormField

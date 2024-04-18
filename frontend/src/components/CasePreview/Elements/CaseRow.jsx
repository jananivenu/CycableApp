import Icon from './Icon'

function CaseRow({ type, content }) {
  return (
    <>
      <Icon type={type} />
      <div>{content}</div>
    </>
  )
}

export default CaseRow

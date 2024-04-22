// import { useState } from 'react'
// import { InputGroup, QuestionGroup } from '../../../../styles/elements/forms'
// import { InputCodeGroup } from './styles'

// function ValidationCodeInput() {
//   const [codes, setCodes] = useState(Array(6).fill(''))

//   const handleChange = (index) => (e) => {
//     const newCodes = [...codes]
//     newCodes[index] = e.target.value.slice(0, 1)
//     setCodes(newCodes)

//     if (e.target.value.length === 1 && index < 5) {
//       document.getElementById(`vcode-${index + 1}`).focus()
//     }
//   }

//   return (
//     <QuestionGroup>
//       <InputGroup>
//         <label htmlFor="vcode-0">Validation Code:</label>
//         <InputCodeGroup>
//           {codes.map((code, index) => (
//             <input
//               key={index}
//               id={`vcode-${index}`}
//               type="text"
//               value={code}
//               onChange={handleChange(index)}
//               maxLength="1"
//             />
//           ))}
//         </InputCodeGroup>
//       </InputGroup>
//     </QuestionGroup>
//   )
// }

// export default ValidationCodeInput

import { useState } from 'react'
import {
  InputGroup,
  QuestionGroup,
  ErrorMessage,
} from '../../../../styles/elements/forms'
import { InputCodeGroup } from './styles'

function ValidationCodeInput({ onCodeChange }) {
  const [codes, setCodes] = useState(Array(5).fill(''))
  const [error, setError] = useState('')

  const handleChange = (index) => (e) => {
    const newCodes = [...codes]
    newCodes[index] = e.target.value.slice(0, 1)
    setCodes(newCodes)

    onCodeChange(newCodes.join(''))

    if (e.target.value.length === 1 && index < 5) {
      document.getElementById(`vcode-${index + 1}`).focus()
    }
  }

  const handleBlur = () => {
    setTimeout(() => {
      if (document.activeElement.closest('#question-group') === null) {
        if (codes.some((code) => code === '')) {
          setError('All fields must be filled.')
        } else {
          setError('')
        }
      }
    }, 0)
  }

  return (
    <QuestionGroup onBlur={handleBlur} id="question-group">
      <InputGroup>
        <label htmlFor="vcode-0">Validation Code:</label>
        <InputCodeGroup>
          {codes.map((code, index) => (
            <input
              key={index}
              id={`vcode-${index}`}
              type="text"
              value={code}
              onChange={handleChange(index)}
              maxLength="1"
            />
          ))}
        </InputCodeGroup>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputGroup>
    </QuestionGroup>
  )
}

export default ValidationCodeInput

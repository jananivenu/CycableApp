// import { useState } from "react";
// import * as styles from "./styles.css"

// const Login = () => {
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")

//     const onSubmitHandler = (e) => {
//         e.preventDefault()
//     }

//     return (
//         <div className={styles.container}>
//             <h2 className={styles.title}>LOGIN</h2>
//             <form onSubmit={onSubmitHandler} className={styles.form}>
//                 <input
//                 type="text"
//                 placeholder="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                 type="password"
//                 placeholder="password"
//                 required
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button>Login</button>
//             </form>
//         </div>
//     )
// }

// export default Login

import { useState } from 'react'
import { MainContainer, NarrowSectionContainer } from '../../../styles'
import { BasicForm } from '../../../styles/elements/forms'
import { AccentButton } from '../../../styles/elements/buttons'
import { StyledH2 } from '../../../styles/elements/typography'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <MainContainer>
      <NarrowSectionContainer>
        <StyledH2>Login</StyledH2>
        <BasicForm onSubmit={onSubmitHandler}>
          <input
            type="text"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <AccentButton>Login</AccentButton>
        </BasicForm>
      </NarrowSectionContainer>
    </MainContainer>
  )
}

export default Login

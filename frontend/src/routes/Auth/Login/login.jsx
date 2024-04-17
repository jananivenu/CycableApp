import { useState } from 'react'
import * as styles from './styles.css'
import { useNavigate} from "react-router-dom" 
import { useDispatch, useSelector} from "react-redux"
import { login_user } from '../../../store/slices/userSlice'

const Login = () => {
  const emailReduxStore = useSelector((state) => state.user.email) 
  const [email, setEmail] = useState(emailReduxStore || '') 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      const response = await UserAxios.post("/auth/token/", {
        email: email,
        password: password,
      });
      console.log(response)
      
      localStorage.setItem("token", response.data.access);
      dispatch(login_user(response.data.access))
      navigate("/"); 
    } catch (error) {
      console.error("Validation error:", error.response.data);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>LOGIN</h2>
      <form onSubmit={onSubmitHandler} className={styles.form}>
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
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login

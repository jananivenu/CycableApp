import { useEffect } from 'react'
import Router from './routes'
import { GlobalStyle } from './styles/index'
import { useDispatch } from 'react-redux'
import { initializeUser, loginUser } from './store/slices/userSlice'

const App = () => {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(initializeUser())
  // }, [dispatch])

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(loginUser(token));
    }
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App

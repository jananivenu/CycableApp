import { useEffect } from 'react'
import Router from './routes'
import { GlobalStyle } from './styles/index'
import { useDispatch } from 'react-redux'
import { initializeUser } from './store/slices/userSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeUser())
  }, [dispatch])


  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     dispatch(loginUser(token));
  //   }
  // }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App

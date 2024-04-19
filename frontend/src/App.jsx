import { useEffect } from 'react'
import Router from './routes'
import { GlobalStyle } from './styles/index'
import { useDispatch } from 'react-redux'
import { initializeUser } from './store/slices/userSlice'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log("Initializing user from localStorage");

    dispatch(initializeUser())
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App

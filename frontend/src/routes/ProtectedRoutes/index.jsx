import { Navigate, useLocation } from 'react-router-dom'
import Layout from '../Layout'

const ProtectedRoutes = () => {
  const location = useLocation()
  const isLoggedIn = localStorage.getItem('token')

  return !isLoggedIn ? (
    <Navigate to="/login" replace state={{ from: location.pathname }} />
  ) : (
    <Layout />
  )
}

export default ProtectedRoutes

import { Navigate, Outlet } from 'react-router-dom'

import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from '../components/Spinner'

const AuthRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  return !loggedIn ? <Outlet /> : <Navigate to="/profile" />
}

export default AuthRoute

import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const auth = useSelector((state: RootState) => state.auth)

  if (!auth.user) {
    return <Navigate to={'/signin'} />
  }

  return <Outlet />
}

export default ProtectedRoutes

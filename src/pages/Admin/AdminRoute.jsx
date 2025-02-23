import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const AdminRoute = () => {
  const user = useSelector(state => state?.auth?.user)
  return user && user.isAdmin ? <Outlet /> : <Navigate to='/login' replace />
}

export default AdminRoute
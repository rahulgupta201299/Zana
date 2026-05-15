import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { ROUTES } from '@/Constants/Routes'
import AdminLayout from './AdminLayout'
import { isAdminAuthenticated } from './AdminAuth'

function AdminRoutes() {
  const location = useLocation()
  const authenticated = isAdminAuthenticated()
  const pathname = location.pathname.replace(/\/+$/, "") || ROUTES.BASE_URL
  const isLoginRoute = pathname === ROUTES.ADMIN || pathname === ROUTES.ADMIN_LOGIN

  if (isLoginRoute) {
    return authenticated ? (
      <Navigate replace to={ROUTES.ADMIN_DASHBOARD} />
    ) : (
      <Outlet />
    )
  }

  if (!authenticated) {
    return (
      <Navigate
        replace
        to={ROUTES.ADMIN}
        state={{ from: location.pathname }}
      />
    )
  }

  return <AdminLayout />
}

export default AdminRoutes

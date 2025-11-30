import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AppStore from '@/Configurations/AppStore'
import { ROUTES } from '@/Constants/Routes'

function ProtectedRoutes() {
  const location = useLocation()
  const state = AppStore.getState()
  const checkLogin = state.auth.login.verified

  const isAuthenticated = Boolean(checkLogin)
  const isErrorScreen = location.pathname.startsWith(ROUTES.PAGE_NOT_FOUND)

  // draft id is NA - redirect to error screen
  // if already in error screen then ignore otherwise max stack issue
  // if (!isAuthenticated && !isErrorScreen) {
  //   return (
  //     <Navigate
  //       to={ROUTES.PAGE_NOT_FOUND}
  //       replace
  //     />
  //   )
  // }

  return <Outlet />
}

export default ProtectedRoutes

import { Navigate, Outlet, useLocation } from 'react-router-dom'
import AppStore from '@/Configurations/AppStore'

function ProtectedRoutes() {
  const location = useLocation()
  const state = AppStore.getState()

  // TODO for protected routes
  const checkLogin = false

  const isAuthenticated = Boolean(checkLogin)
  // const isErrorScreen = location.pathname.startsWith(ROUTES.ETB_DYNAMIC_ERROR)

  // draft id is NA - redirect to error screen
  // if already in error screen then ignore otherwise max stack issue
  // if (!isAuthenticated && !isErrorScreen) {
  //   return (
  //     <Navigate
  //       to={`${ROUTES.ETB_DYNAMIC_ERROR}/${ErrorScreenType.SOMETHING_WENT_WRONG}`}
  //       replace
  //     />
  //   )
  // }

  return <Outlet />
}

export default ProtectedRoutes

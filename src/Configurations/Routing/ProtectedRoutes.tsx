import { Navigate, useLocation } from 'react-router-dom'
import AppStore from '@/Configurations/AppStore'
import { ROUTES } from '@/Constants/Routes'
import { setOpenSignupPopup } from '@/Redux/Auth/Reducer'
import Wrapper from './Wrapper'

function ProtectedRoutes() {
  const location = useLocation()
  const state = AppStore.getState()
  const dispatch = AppStore.dispatch
  const checkLogin = state.auth.login.verified

  const isAuthenticated = Boolean(checkLogin)
  const isErrorScreen = location.pathname.startsWith(ROUTES.PAGE_NOT_FOUND)

  // if already in error screen then ignore otherwise max stack issue
  if (!isAuthenticated && !isErrorScreen) {
    dispatch(setOpenSignupPopup(true))
    return (
      <Navigate
        to={ROUTES.BASE_URL}
        replace
      />
    )
  }

  return <Wrapper />
}

export default ProtectedRoutes

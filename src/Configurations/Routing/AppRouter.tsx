import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import usePageTracking from '@/hooks/usePageTracking'

import { getAppRouter } from './GetAppRouter'

let router: ReturnType<typeof getAppRouter>

export function getHistory() {
  return router
}

function AppRouter() {
  if (!router) router = getAppRouter()

  usePageTracking();

  return (
    <Suspense fallback={"Loading..."}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppRouter

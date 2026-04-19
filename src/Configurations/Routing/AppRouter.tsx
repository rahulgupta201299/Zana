import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getAppRouter } from './GetAppRouter'
import { useClarityPageTracking } from '@/hooks/useClarityPageTracking'
import { usePageTracking } from '@/hooks/usePageTracking'

let router: ReturnType<typeof getAppRouter>

export function getHistory() {
  return router
}

function AppRouter() {
  if (!router) router = getAppRouter()

  usePageTracking();
  useClarityPageTracking();

  return (
    <Suspense fallback={"Loading..."}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppRouter

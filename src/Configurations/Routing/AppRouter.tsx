import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getAppRouter, prefetchCommerceRoutePages } from './GetAppRouter'

let router: ReturnType<typeof getAppRouter>

export function getHistory() {
  return router
}

function AppRouter() {
  if (!router) router = getAppRouter()

  useEffect(() => {
    let cleanupPrefetchScheduler: VoidFunction | undefined;

    const schedulePrefetch = () => {
      const prefetchPages = () => {
        void prefetchCommerceRoutePages();
      };

      if ("requestIdleCallback" in window) {
        const idleId = window.requestIdleCallback(prefetchPages, {
          timeout: 3000,
        });
        cleanupPrefetchScheduler = () => window.cancelIdleCallback(idleId);
        return;
      }

      const timeoutId = setTimeout(prefetchPages, 2500);
      cleanupPrefetchScheduler = () => window.clearTimeout(timeoutId);
    };

    if (document.readyState === "complete") {
      schedulePrefetch();
    } else {
      window.addEventListener("load", schedulePrefetch, { once: true });
    }

    return () => {
      window.removeEventListener("load", schedulePrefetch);
      cleanupPrefetchScheduler?.();
    };
  }, []);

  return (
    <Suspense fallback={"Loading..."}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default AppRouter

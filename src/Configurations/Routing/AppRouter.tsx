import { Suspense, useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'

import { getAppRouter, prefetchCommerceRoutePages } from './GetAppRouter'

let router: ReturnType<typeof getAppRouter>
const ROUTE_PREFETCH_DELAY = 15000
const PREFETCH_EVENTS = ['pointerdown', 'keydown', 'touchstart'] as const

export function getHistory() {
  return router
}

function AppRouter() {
  if (!router) router = getAppRouter()

  useEffect(() => {
    let cleanupPrefetchScheduler: VoidFunction | undefined;
    let didSchedule = false;

    const schedulePrefetch = () => {
      if (didSchedule || navigator.webdriver) return;
      didSchedule = true;

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

    const delayedPrefetchId = window.setTimeout(schedulePrefetch, ROUTE_PREFETCH_DELAY);
    PREFETCH_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, schedulePrefetch, {
        passive: true,
        once: true,
      });
    });

    return () => {
      window.clearTimeout(delayedPrefetchId);
      PREFETCH_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, schedulePrefetch);
      });
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

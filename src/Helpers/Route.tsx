import type { ComponentType } from 'react'
import { lazy, Suspense } from 'react'
import type { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom'

import AppStore from '@/Configurations/AppStore'

export const lazyLoadPage = (
  importer: () => Promise<{ default: ComponentType }>,
  Fallback?: ComponentType
) => {
  const Page = lazy(importer)
  const lazyPage = Fallback ? (
    <Suspense fallback={<Fallback />}>
      <Page />
    </Suspense>
  ) : (
    <Page />
  )

  return lazyPage
}

export const validatePublicRouteLoader =
  (importer?: () => Promise<{ loader: LoaderFunction }>) =>
  async (args: LoaderFunctionArgs) => {
    return lazyLoadLoader(importer)(args)
  }

export const lazyLoadLoader =
  (importer?: () => Promise<{ loader: LoaderFunction }>) =>
  async (args: LoaderFunctionArgs) => {
    if (importer) {
      const { loader } = await importer()
      return loader(args)
    }
  }

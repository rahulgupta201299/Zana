import type { ComponentType } from 'react'
import { lazy, Suspense } from 'react'
import type { LoaderFunction, LoaderFunctionArgs } from 'react-router-dom'
import { redirect } from 'react-router-dom'

import { ROUTES } from '@/Constants/Routes'
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

export const validatePrivateRouteLoader =
  (importer?: () => Promise<{ loader: LoaderFunction }>) =>
  async (args: LoaderFunctionArgs) => {
    const state = AppStore.getState()
    // TODO check
    // const isLoggedIn = Boolean(state.draftDetails.draft._id)

    // if (!isLoggedIn) {
    //   return redirect(
    //     `${ROUTES.ETB_DYNAMIC_ERROR}/${ErrorScreenType.SOMETHING_WENT_WRONG}`
    //   )
    // }

    return lazyLoadLoader(importer)(args)
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

import React, { useEffect } from 'react'
import * as R from 'ramda'
import { MainRouter, UserAuth } from '@pikaname/route'
import { ErrorBoundary } from '@pikaname/component'
import {
  GoogleAnalyticsService,
} from 'services'
import routeConfigs from 'routes/RouteConfig'
import UserRoleType from 'routes/UserRoleType'

const App = () => {
  const shouldRedirect = (requiredRoles: string[], userAuth: UserAuth): boolean => {
    const {
      role,
      userId,
    } = userAuth
    if (role === UserRoleType.MEMBER && userId) {
      // if need to redirect
    }

    // NOTE: no role permission required, don't redirect.
    if (R.isEmpty(requiredRoles)) return false
    // NOTE: user role is one of the required roles, don't redirect.
    // @ts-ignore
    if (R.includes(role)(requiredRoles)) return false

    return false
  }

  const getRedirectKey = (): string => {
    return 'MAIN'
  }

  useEffect(() => {
    GoogleAnalyticsService.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div>
      <ErrorBoundary>
        <MainRouter
          routeConfigs={routeConfigs}
          shouldRedirect={shouldRedirect}
          getRedirectKey={getRedirectKey}
        />
      </ErrorBoundary>
    </div>
  )
}

export default App

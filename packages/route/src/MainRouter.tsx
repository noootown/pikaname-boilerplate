import React from 'react'
import {
  Switch,
  BrowserRouter as Router,
} from 'react-router-dom'
import * as R from 'ramda'
import { getTokenAuth, isTokenExpired } from './jwtHelper'
import { LocalStorageService } from './services'
import Route from './Route'
import { UserAuth } from './types'

const MainRouter = ({
  routeConfigs,
  shouldRedirect,
  getRedirectKey,
}: {
  routeConfigs: any
  shouldRedirect: (requiredRoles: string[], userAuth: UserAuth) => boolean
  getRedirectKey: () => string
}) => {
  const token = LocalStorageService.getJWTToken()
  let userAuth: UserAuth = { userId: '', role: '' }
  try {
    if (!R.isNil(token)) {
      const expired = isTokenExpired(token)
      if (!expired) {
        userAuth = getTokenAuth(token)
      } else {
        LocalStorageService.refreshJWTToken()
      }
    }
  } catch (e) {
    /* eslint-disable-next-line */
    console.log(e)
  }

  // @ts-ignore
  return (
    <Router>
      <Switch>
        {
          R.pipe(
            // @ts-ignore
            R.values,
            R.map(({
              layout: Layout,
              layoutConfig,
              permission,
              path,
              ...rest
            }: {
              layout: any
              layoutConfig: any
              permission: any
              path: any
              rest: any[]
            }) => (
              <Route
                key={path}
                render={(renderProps: any) => (
                  <Layout
                    {...renderProps}
                    {...layoutConfig}
                    userAuth={userAuth}
                  />
                )}
                permission={permission}
                userAuth={userAuth}
                path={path}
                routeConfigs={routeConfigs}
                shouldRedirect={shouldRedirect}
                getRedirectKey={getRedirectKey}
                {...rest}
              />
            )),
          )(routeConfigs)
        }
      </Switch>
    </Router>
  )
}

export default MainRouter

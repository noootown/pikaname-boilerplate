import React from 'react'
import { Redirect, Route as RouterRoute } from 'react-router-dom'
import PropTypes from 'prop-types'
import getRoutePath from './getRoutePath'
import {
  UserAuth,
  Permission,
  RouteConfigs,
} from './types'

const Route = ({
  path,
  permission,
  userAuth,
  render,
  routeConfigs,
  shouldRedirect,
  getRedirectKey,
  ...rest
}: {
  path: string
  permission: Permission
  userAuth: UserAuth
  render: any
  routeConfigs: RouteConfigs
  shouldRedirect: (requiredRoles: string[], userAuth: UserAuth) => boolean
  getRedirectKey: () => string
  rest: any[]
}) => {
  const { roles = [] } = permission

  return (
    <RouterRoute
      {...rest}
      render={renderProps => (shouldRedirect(roles, userAuth) ? (
        <Redirect
          to={{
            pathname: getRoutePath(getRedirectKey(), routeConfigs),
            state: { from: renderProps.location },
          }}
        />
      ) : render(renderProps))}
    />
  )
}

Route.propTypes = {
  path: PropTypes.string.isRequired,
  userAuth: PropTypes.shape({
    userId: PropTypes.string,
    role: PropTypes.string,
  }),
  render: PropTypes.func.isRequired,
  permission: PropTypes.shape({
    roles: PropTypes.arrayOf(PropTypes.string),
  }),
  routeConfigs: PropTypes.object.isRequired,
}

Route.defaultProps = {
  permission: {},
  userAuth: {
    userId: null,
    role: null,
  },
}

export default Route

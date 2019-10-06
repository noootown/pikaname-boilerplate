import NotFoundPage from 'modules/auth/NotFoundPage'
import MainLayout from 'layout/MainLayout'

// export const ACCESS_DENIED = 'access_denied'
export const NOT_FOUND = 'notfound'

/*
 *  RouteConfig = {
   *    ...routProps, // (https://reacttraining.com/react-router/web/api/Route/route-props)
   *    component: <Component>, // (optional) - The layout component for the route.
   *    layoutConfig: { // The sub-components for the component to render.
   *      [key]: [component], // <Component> sub-components
   *    },
   *    permission: { // (optional)
   *      isAdmin: <Boolean>, // (optional) - Whether if the route requires visitor to be admin.
   *    },
 *  }
 */

export default {
  // [ACCESS_DENIED]: {
  //   path: `/${ACCESS_DENIED}`,
  //   exact: true,
  //   layoutConfig: {
  //     main: AccessDeniedPage,
  //     top: TopLogo,
  //   },
  //   permission: {
  //     roles: [UserRoleType.ADMIN, UserRoleType.MEMBER],
  //   },
  // },
  // Public route
  [NOT_FOUND]: {
    path: '*',
    layout: MainLayout,
    layoutConfig: {
      main: NotFoundPage,
    },
  },
}

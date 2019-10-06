import GeneralRouteConfig from './general/routeConfigs'
import MainRouteConfig from './main/routeConfigs'
import { RouteConfigs as RouteConfigsType } from '@pikaname/route'

const RouteConfigs: RouteConfigsType = {
  ...MainRouteConfig,

  // must be put at the bottom
  ...GeneralRouteConfig,
}

export default RouteConfigs

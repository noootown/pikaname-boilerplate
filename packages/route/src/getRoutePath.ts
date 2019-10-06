import * as R from 'ramda'

export default (routeKey: string, routeConfigs: any): string =>
  R.pathOr('', [routeKey, 'path'])(routeConfigs)

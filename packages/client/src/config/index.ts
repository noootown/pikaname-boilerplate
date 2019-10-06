import { Config } from './config'
import localConfig from './config-local'
import devConfig from './config-dev'
import prodConfig from './config-prod'

/*
 * For create-react-app, process.env.NODE_ENV is set to:
 * - 'development' when using npm start,
 * - 'test' when using npm test,
 * - 'production' when using npm build.
 *
 * By default you will have NODE_ENV defined for you, and any other environment variables starting with REACT_APP_
 */
const { REACT_APP_ENV } = process.env

let config: Config

switch (REACT_APP_ENV) {
  case 'local': {
    config = localConfig
    break
  }
  case 'dev': {
    config = devConfig
    break
  }
  case 'prod': {
    config = prodConfig
    break
  }
  default: {
    config = localConfig
    break
  }
}

export default config

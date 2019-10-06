import MainPage from 'modules/main/MainPage'
import MainLayout from 'layout/MainLayout'

export const MAIN = 'MAIN'

export default {
  [MAIN]: {
    path: '/',
    exact: true,
    layout: MainLayout,
    layoutConfig: {
      main: MainPage,
    },
    permission: {
      roles: [],
    },
  },
}

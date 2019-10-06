import { ReactElement, FunctionComponent } from 'react'
export interface UserAuth {
  userId: string
  role: string
  exp?: number
}

export interface Permission {
  roles: string[]
}

export interface RouteConfig {
  path: string
  exact?: boolean
  layout: ReactElement<any> | FunctionComponent<any>
  layoutConfig: {
    main?: ReactElement<any> | FunctionComponent<any>
  }
  permission?: Permission
}

export interface RouteConfigs {
  [propName: string]: RouteConfig
}

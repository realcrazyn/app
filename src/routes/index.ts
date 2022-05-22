import React from 'react'
import { About } from '../pages/About'

import { Main } from '../pages/Main'

export interface IRoute {
  path: string
  component: React.ComponentType
}

export enum RouteNames {
  MAIN = '/',
  ABOUT = '/about',
}

export const publicRoutes: IRoute[] = [
  { path: RouteNames.MAIN, component: Main },
  { path: RouteNames.ABOUT, component: About },
]

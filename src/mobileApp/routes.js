import React from 'react'
import { serverFetch as homeFetch } from '&/redux/serverFetch'

import LoadableHOC from '&/LoadableHOC'
const AsyncHome = LoadableHOC({ loader: () => import(/* webpackChunkName: "MobileHome" */ './Home') })
const AsyncCoins = LoadableHOC({ loader: () => import(/* webpackChunkName: "MobileAbout" */ './About') })

export default [
  {
    path: '/',
    component: AsyncHome,
    serverFetch: homeFetch,
    exact: true
  },
  {
    path: '/coins',
    component: AsyncCoins,
    exact: true
  },
]

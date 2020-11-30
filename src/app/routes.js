import React from 'react'
import { serverFetch as homeFetch } from '&/redux/serverFetch'

import LoadableHOC from '&/LoadableHOC'
const AsyncHome = LoadableHOC({ loader: () => import(/* webpackChunkName: 'Home' */ './Home') })
const AsyncCoins = LoadableHOC({ loader: () => import(/* webpackChunkName: 'Coins' */ './Coins') })

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

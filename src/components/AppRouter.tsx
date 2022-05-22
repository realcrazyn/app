import { Routes, Route, Navigate } from 'react-router-dom'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { publicRoutes, RouteNames } from '../routes'
import React from 'react'

export const AppRouter = () => {
  // const { isAuth } = useTypeSelector((state) => state.auth)

  return (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  )
}

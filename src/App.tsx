import { FC, useEffect } from 'react'
import './App.css'
import { useActions } from './hooks/useActions'
import { Layout } from 'antd'
import { AppRouter } from './components/AppRouter'
import React from 'react'

const App: FC = () => {
  const { getFilms, setState } = useActions()

  useEffect(() => {
    let data = localStorage.getItem('commentData')
    data ? setState(JSON.parse(data)) : null

    getFilms(`https://yts.mx/api/v2/list_movies.json?page=1&limit=10`)
  }, [])

  return (
    <Layout className="h100">
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App

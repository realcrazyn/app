/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store'
import 'antd/dist/antd.css'

const div = document.createElement('div')
div.className = 'root'
document.body.appendChild(div)

//@ts-ignore
const root = createRoot(div) // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

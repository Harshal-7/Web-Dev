import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/'
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

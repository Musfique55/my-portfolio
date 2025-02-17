import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path : '/',
    element : <Home></Home>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <Home></Home>
    </RouterProvider>
  </React.StrictMode>,
)

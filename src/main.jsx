import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Project from './components/Project'
import Contact from './components/Contact'
import ProjectPage from './components/ProjectPage'

const router = createBrowserRouter([
  {
    path: 'portfolio/',
    element: <Layout/>,
    children:[
      {
        path:"",
        element:<Hero/>
      },{
        path:"about",
        element:<About/>
      },
      {
        path:"project",
        element:<Project/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"project/projectPage",
        element:<ProjectPage/>
      }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

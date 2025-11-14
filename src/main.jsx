import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Root from './components/Root/root.jsx'
import Home from './components/Home/Home.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import Laptop from './components/Mobile/Laptop/Laptop.jsx'

const router = createBrowserRouter([
 {
   path: '/',
 Component: Root,
 children:[
  {index: true, Component: Home},
  {path: 'mobiles', Component: Mobile}, 
  {path: 'laptops', Component:Laptop}
 ]
},
{
  path: 'about',
  element: <div>About me here</div>
},
{
  path:'blogs',
  element: <div>All my blogs are here</div>
},
{
  path: 'app',
  Component: App
},
{
  path: '/app2',
  // element: <App></App>
  Component: App
}
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

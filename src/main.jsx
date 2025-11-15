import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Root from './components/Root/root.jsx'
import Home from './components/Home/Home.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import Laptop from './components/Mobile/Laptop/Laptop.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

const router = createBrowserRouter([
 {
   path: '/',
 Component: Root,
 children:[
  { index: true, Component: Home },
  { path: 'mobiles', Component: Mobile }, 
  { path: 'laptops', Component:Laptop },
  { path: 'users',
    loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
    Component:Users },
    {
      path: 'users2',
      element: <Suspense fallback={<span>Loading/....</span>}>
<Users2 userPromise={userPromise}></Users2>
      </Suspense>
    }
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

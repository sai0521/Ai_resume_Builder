import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Sign_in from '../routes/Sign_in.jsx'
import Home from '../routes/Home.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Dashboard from '../routes/Dashboard.jsx'
import PersonalDetails from '../routes/PersonalDetails.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

const r = createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/dashboard',
        element:<Dashboard/>
      },
      {
        path:'/PersonalDetails',
        element:<PersonalDetails/>
      }
    ]
  }
  ,
  {
    path:'/',
    element:<Home/>
  },
  {
    path : '/auth',
    element: <Sign_in/>

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <RouterProvider router={r} />
     </ClerkProvider>
    
  </StrictMode>,
)

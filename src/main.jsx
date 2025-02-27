import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Sign_in from '../routes/Sign_in.jsx'
import Home from '../routes/Home.jsx'
import Dashboard from '../routes/Dashboard.jsx'
import PersonalDetails from '../routes/PersonalDetails.jsx'
import Register from '../routes/Register.jsx'
import { AuthProvider } from './AuthContext.jsx'
import StartResume from '../components/StartResume.jsx'


const r = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path:'/StartResume',
        element:<StartResume/>
      }
    ]
  }
  ,
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/auth',
    element: <Sign_in />

  },
  {
    path: '/register',
    element: <Register />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={r} />
    </AuthProvider>
  </StrictMode>,
)

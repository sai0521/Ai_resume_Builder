
import './App.css'
import { useUser } from '@clerk/clerk-react';
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/header';


function App() {
  const {user,isLoaded,isSignedIn} = useUser();

  if(!isSignedIn && isLoaded){
    return <Navigate to={'/auth'}/>
  }

  return (
    <>

      <Header/>
      <Outlet/>
    </>
  )
}

export default App

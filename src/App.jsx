
import './App.css'
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header';

function App() {


  return (
    <>
        <div className='relative'>
          <Header />
          <Outlet />
        </div>
    </>
  )
}

export default App

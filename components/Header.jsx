import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    
    return (
        <div className=' p-6 flex justify-between bg-white shadow fixed top-0 w-full' >
            <img src="/logo.svg" alt="" />
            
                <Link to={'/dashboard'}>
                    <button className='cursor-pointer bg-purple-500 text-white px-4 py-2 rounded'>Dashboard</button>
                </Link> 
                <Link to={'/auth'}>
                    <button className='cursor-pointer bg-green-500 text-white px-4 py-2 rounded'>Get Started</button>
                </Link>
            
        </div>
    )
}

export default Header

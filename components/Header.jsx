import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const Header = () => {
    const { user, isSignedIn } = useUser();
    return (
        <div className=' p-6 flex justify-between shadow' >
            <img src="/logo.svg" alt="" />
            {isSignedIn ?
                <Link to={'/dashboard'}>
                    <button className='bg-purple-500 text-white px-4 py-2 rounded'>Dashboard</button>
                </Link> :
                <Link to={'/auth'}>
                    <button className='bg-green-500 text-white px-4 py-2 rounded'>Get Started</button>
                </Link>
            }
        </div>
    )
}

export default Header

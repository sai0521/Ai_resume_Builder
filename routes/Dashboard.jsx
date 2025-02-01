import React, { useState } from 'react'
import Namebox from '../components/Namebox'

const Dashboard = () => {
  const [fl,setFl] = useState(false);
  return (
    <div className='p-4 pl-[100px]'>
      <h1 className='pb-4 text-3xl font-bold'>My Resume</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

        <button className="bg-gray-300 text-white text-4xl w-[150px] h-[240px] rounded-lg 
                           shadow-xl flex items-center justify-center transition-all transform 
                           hover:scale-110 hover:bg-gray-500" onClick={()=>{
                            setFl(true);
                          }}> +
        </button>

        {
          fl && <Namebox />
        }

      </div>

    </div>
  )
}

export default Dashboard

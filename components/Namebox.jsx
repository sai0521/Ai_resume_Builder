import React, { useState } from 'react'
import { useActionData, useNavigate } from 'react-router-dom';
import { useAuth } from '../src/AuthContext';


const Namebox = ({ setFl }) => {
    const {name,setName} = useAuth()
    const[message,setmessage]=useState("");

    const navigate = useNavigate();

    const handleName = (e)=>{
        e.preventDefault();
        if(name===''){
            setmessage("Name is Required");
        }
        else{
            setFl(false);
            navigate(`/StartResume`,{state:name});
        }
    }

    return (
        <div className=' h-[200px] w-[350px] bg-white  shadow-2xl flex items-center justify-center rounded-lg' >

            <form className='flex flex-col'>

                <h1 className='bold text-3xl pb-5'>Resume Name</h1>

                <label className=''>Enter the Name</label>

                <input type="text" id="name" name="name" className='border rounded w-[300px] h-8 p-2'
                    placeholder='eg. Personal Resume' required onChange={(e)=>{setName(e.target.value) ; setmessage("")}} />

                
              <div >
                <p className='text-red-500 text-center'>{ `${message}`}</p>
              </div>

                <div className=' flex justify-end gap-6 pt-5'>

                    <button className='my-back-btn  '
                        onClick={(e) => {
                            e.preventDefault();
                            setFl(false);
                        }}>Cancel</button>

                    <button className='my-next-btn' type="submit"
                        onClick={(e) => {
                            handleName(e)
                        }}>Next</button>


                </div>

            </form>
        </div>
    )
}

export default Namebox

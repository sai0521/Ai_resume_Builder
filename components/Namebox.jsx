import React from 'react'
import { Link } from 'react-router-dom';

const Namebox = ({ setFl }) => {
    return (
        <div className=' h-[200px] w-[350px]  shadow-2xl flex items-center justify-center rounded-lg' >

            <form className='flex flex-col'>

                <h1 className='bold text-3xl pb-5'>Resume Name</h1>

                <label className=''>Enter the Name</label>

                <input type="text" id="name" name="name" className='border rounded w-[300px] h-8 p-2'
                    placeholder='eg. Personal Resume' />

                <div className=' flex justify-end gap-6 pt-5'>

                    <button className='border rounded h-8 w-14 transition-all transform hover:scale-110 '
                        onClick={(e) => {
                            e.preventDefault();
                            setFl(false);
                        }}>Cancel</button>

                    <Link to={'/PersonalDetails'}>

                        <button className='my-btn' type="submit"
                            onClick={(e) => {
                                setFl(false);
                            }}>Next</button>
                            
                    </Link>

                </div>

            </form>
        </div>
    )
}

export default Namebox

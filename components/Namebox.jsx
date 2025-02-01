import React from 'react'

const Namebox = () => {
    return (
        <div className='h-[200px] w-[350px] shadow flex items-center justify-center rounded-lg' >
            <form className='flex flex-col'>
                <h1 className='bold text-3xl pb-5'>Resume Name</h1>
                <label className=''>Enter the Name</label>
                <input type="text" id="name" name="name" className='border rounded w-[300px]' placeholder='eg. Personal Resume' />
                <div className=' flex justify-end gap-4 pt-5'>
                    <button className='border rounded '>Cancel</button>
                    <button className='border rounded bg-green-500 text-white' type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Namebox

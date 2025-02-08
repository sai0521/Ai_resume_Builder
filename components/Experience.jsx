import React from 'react'
import Description from './Description'

const Experience = ({ setStep, step }) => {
    return (
        <div className="w-full">
            <form className="flex flex-col gap-2">
                <h1 className="bold text-4xl mb-5">Employment History</h1>

                <label>Job Title</label>
                <input type="text" className="border p-2 rounded" placeholder="Eg. Software Engineer" />

                <label>Employer</label>
                <input type="text" className="border p-2 rounded" placeholder="Eg. Google  " />

                <div className='flex justify-between gap-5'>
                    <div className='flex flex-col w-1/4 gap-2'>
                        <lable>Start date</lable>
                        <input type="date" className="border p-2 rounded" />
                    </div>

                    <div className='flex flex-col w-1/4 gap-2'>
                        <lable>End date</lable>
                        <input type="date" className="border p-2 rounded" />
                    </div>

                    <div className='flex flex-col w-1/2 gap-2'>
                        <label>City</label>
                        <input type="text" className="border p-2 rounded" placeholder="Eg. " />
                    </div>
                </div>

                <div className="flex justify-between">
                    <button type="button" className="my-back-btn" onClick={() => setStep(step - 1)}> Back </button>
                    <button type="submit" className="my-next-btn" onClick={() => setStep(step + 1)}> Next </button>
                </div>
            </form>
        </div>
    )
}

export default Experience

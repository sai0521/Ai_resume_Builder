import React, { useState } from 'react'
import Description from './Description'
import { v4 as uuidv4 } from 'uuid';

const Experience = ({ setData, setRes }) => {

    const { step, setStep } = setData
    const { resume, setResume } = setRes
    const [sty,setSty] = useState([])
    const prompt = ', now basing on the above details , generate a description for experience in resume , output should boe more professional , answer should be in 3 to 4 lines in json format,output should be in form of {experience:["experience1" ,"experience2".....]}, do not give any sentences if mentions'

    const handleChange = (ind,name,value) => {
        setResume(prev => ({...prev,experience :prev.experience.map((exp,i)=> ind==i ? {...exp,[name]:value} : exp )}));

        setSty(Array(resume.experience.length).fill('border'))
    }

    const validate = (setStep,step) => {
        let newSty = [...sty]; // Copy the current styles
        let isValid = true;
    
        resume.experience.forEach((exp, ind) => {
            let isEmpty = Object.values(exp).some((value) => value === '');
    
            if (isEmpty) {
                newSty[ind] = 'border-red-500 text-red-500'; // Mark div as red
                isValid = false;
            } else {
                newSty[ind] = 'border'; // Reset style if valid
            }
        });
    
        setSty(newSty); // Update all at once
    
        if (isValid) setStep(step + 1); // Proceed only if all fields are filled
    }

    const addNew = () => {
        setResume(prev => ({...prev,experience : [ ...prev.experience,{ id : uuidv4(), JobTitle: '', Employer: '', stDate: '', endDate: '', City: '',description:'' } ] }));

        setSty([...sty,'border'])
    }

    const removeExp = (id) =>{
        setResume(prev => ( {...prev,experience : prev.experience.filter((exp) => exp.id!==id)}))
    }

    return (
        <div className="w-full flex flex-col gap-5">

            <h1 className="bold text-4xl ">Employment History</h1>

            {resume.experience.map((exp, ind) => (
                <div key={exp.id} className={`flex flex-col gap-2 bg-white border rounded relative p-5  ` + sty[ind]}>

                    <button type="button" className='absolute top-1 right-2 font-mono text-gray-500' onClick={()=>removeExp(exp.id)}>X</button>

                    <div className='flex flex-wrap'>
                        <div className='input-div'>
                            <label>Job Title</label>
                            <input type="text" className="border p-2 rounded" 
                            onChange={e => handleChange(ind,'JobTitle',e.target.value)}
                            value={exp.JobTitle} placeholder="Eg. Software Engineer" />
                        </div>
                        <div className='input-div'>
                            <label>Employer</label>
                            <input type="text" className="border p-2 rounded" 
                            onChange={e => handleChange(ind,'Employer',e.target.value)}
                            value={exp.Employer} placeholder="Eg. Google  " />
                        </div>

                    </div>
                    <div className='flex flex-wrap'>
                        <div className='flex flex-wrap  sm:w-1/2'>
                            <div className='input-div'>
                                <label>Start date</label>
                                <input type="date" className="border p-2 rounded" 
                                onChange={e => handleChange(ind,'stDate',e.target.value)}
                                value={exp.stDate}/>
                            </div>

                            <div className='input-div'>
                                <label>End date</label>
                                <input type="date" className="border p-2 rounded" 
                                onChange={e => handleChange(ind,'endDate',e.target.value)}
                                value={exp.endDate} />
                            </div>
                        </div>

                        <div className='input-div'>
                            <label>City</label>
                            <input type="text" className="border p-2 rounded" 
                            onChange={e => handleChange(ind,'City',e.target.value)}
                            value={exp.City} placeholder="Eg. India " />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 p-2'>
                        <Description setData={{step,setStep}} setRes={{resume,setResume}} Label={'Description'} ind={ind} prompt={prompt} name={'experience'}/>
                    </div>
                    
                </div>

            ))}


            <div className="flex justify-between">
                <button type="button" className="my-back-btn" onClick={() => setStep(step - 1)}> Back </button>

                {resume.experience.length<3 && <button type="button" className='my-add-btn' onClick={addNew}> Add New</button>}

                <button type="button" className="my-next-btn" onClick={() => validate(setStep,step)}> Next </button>
            </div>

        </div >
    )
}

export default Experience

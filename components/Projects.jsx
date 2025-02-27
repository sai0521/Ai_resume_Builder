import React, { useState } from 'react'
import Description from './Description'
import { v4 as uuidv4 } from 'uuid';

const Projects = ({ setData, setRes }) => {

    const { step, setStep } = setData
    const { resume, setResume } = setRes
    const [sty,setSty] = useState([])

    const prompt = ', now basing on the above details , generate a description for projects in resume , output should be more professional , answer should be in 3 to 4 lines in json format,output should be in form of {projects:["project1" ,"project2".....]}, do not give any sentences if mentions'

    const handleChange = (ind,name,value) => {
        setResume(prev => ({...prev,projects :prev.projects.map((pro,i)=> ind==i ? {...pro,[name]:value} : pro )}));

        setSty(Array(resume.projects.length).fill('border'))
    }

    const validate = (setStep,step) => {
        let newSty = [...sty]; // Copy the current styles
        let isValid = true;
    
        resume.projects.forEach((pro, ind) => {
            let isEmpty = Object.values(pro).some((value) => value === '');
    
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
        setResume(prev => ({...prev,projects : [ ...prev.projects,{ id : uuidv4(), Title: '', Technologies: '',link:'',description:'' } ] }));

        setSty([...sty,'border'])
    }

    const removepro = (id) =>{
        setResume(prev => ( {...prev,projects : prev.projects.filter((pro) => pro.id!==id)}))
    }

    return (
        <div className="w-full flex flex-col gap-5">

            <h1 className="bold text-4xl ">Projects</h1>

            {resume.projects.map((pro, ind) => (
                <div key={pro.id} className={`flex flex-col bg-white gap-2 border rounded relative p-5  ` + sty[ind]}>

                    <button type="button" className='absolute top-1 right-2 font-mono text-gray-500' onClick={()=>removepro(pro.id)}>X</button>

                    <div className='flex flex-wrap'>
                        <div className='input-div'>
                            <label>Project Title</label>
                            <input type="text" className="border p-2 rounded" 
                            onChange={e => handleChange(ind,'Title',e.target.value)}
                            value={pro.Title} placeholder="Eg. Software Engineer" />
                        </div>
                        <div className='input-div'>
                            <label>Technologies</label>
                            <input type="text" className="border p-2 rounded" 
                            onChange={e => handleChange(ind,'Technologies',e.target.value)}
                            value={pro.Technologies} placeholder="Eg. Google  " />
                        </div>

                        <div className='input-div'>
                            <label>Link</label>
                            <input type="text" className="border p-2 rounded" 
                            onChange={e => handleChange(ind,'link',e.target.value)}
                            value={pro.link} placeholder="Eg. Google  " />
                        </div>

                    </div>
                    <div className='flex flex-col gap-2 p-2'>
                        <Description setData={{step,setStep}} setRes={{resume,setResume}} Label={'Description'} ind={ind} prompt={prompt} name={'projects'}/>
                    </div>
                    
                </div>

            ))}


            <div className="flex justify-between">
                <button type="button" className="my-back-btn" onClick={() => setStep(step - 1)}> Back </button>

                {resume.projects.length<3 && <button type="button" className='my-add-btn' onClick={addNew}> Add New</button>}

                <button type="button" className="my-next-btn" onClick={() => validate(setStep,step)}> Next </button>
            </div>

        </div >
    )
}

export default Projects

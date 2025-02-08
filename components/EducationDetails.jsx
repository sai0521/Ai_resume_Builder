import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const EducationDetails = ({ setData, setRes }) => {

    const { step, setStep } = setData
    const { resume, setResume } = setRes
    const [sty,setSty] = useState([]);

    const handleChange = (ind, name, e) => {
        setResume((prev) => ({
            ...prev,
            educationDetails: prev.educationDetails.map((edu, i) =>
                ind === i ? { ...edu, [name]: e.target.value } : edu)
        }))

        setSty(Array(resume.educationDetails.length).fill('border p-2 rounded'));



    }

    const validate = (setStep, step) => {
        let newSty = [...sty]; // Copy the current styles
        let isValid = true;
    
        resume.educationDetails.forEach((edu, ind) => {
            let isEmpty = Object.values(edu).some((value) => value === '');
    
            if (isEmpty) {
                newSty[ind] = 'border-red-500 text-red-500'; // Mark div as red
                isValid = false;
            } else {
                newSty[ind] = 'border'; // Reset style if valid
            }
        });
    
        setSty(newSty); // Update all at once
    
        if (isValid) setStep(step + 1); // Proceed only if all fields are filled
    };
    

    {/** adds new education div */ }
    const addNew = () => {
        setResume((prev) => ({
            ...prev,
            educationDetails: [...prev.educationDetails,
            {id : uuidv4(), Degree: '', College: '', City: '', stDate: '', endDate: '' }]
        })
        )

        setSty([...sty,'border'])
    }

    {/** removes educatioin div basing on the uuid */ }
    const removeEducation = (id) => {
        if (resume.educationDetails.length > 1) {
            setResume((prev) => ({
                ...prev,
                educationDetails: prev.educationDetails.filter((edu) => edu.id !== id)
            }));
        }
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <h1 className="bold text-4xl mb-3">Education Details</h1>

            {resume.educationDetails.map((edu, ind) => (

                <div key={edu.id} className={`flex flex-col p-4 border rounded relative `+sty[ind]}>

                    <h3 className='bold text-xl'>{`Education ${ind + 1}`}</h3>

                    <button type="button" className='absolute top-1 right-2 font-mono text-gray-500'
                        onClick={() => removeEducation(edu.id)}>X</button>

                    <div className='flex flex-wrap '>


                        {Object.keys(edu).map((key) => (
                            key !== 'stDate' && key !== 'endDate' && key!=='id' &&
                            <div className='input-div'>
                                <label>{key}</label>
                                <input type="text" className="border p-2 rounded"
                                    onChange={(e) => handleChange(ind, key , e)}
                                    value={edu[key]} />
                            </div>
                        )
                        )}

                        <div className='flex flex-wrap flex-1'>

                            <div className='input-div'>

                                <lable>Start date</lable>

                                <input type="date" className="border p-2 rounded"  onChange={(e) => handleChange(ind, 'stDate' , e)}
                                    value={edu['stDate']} />
                            </div>

                            <div className='input-div'>

                                <lable>End date</lable>

                                <input type="date" className="border p-2 rounded"  onChange={(e) => handleChange(ind, 'endDate' , e)}
                                    value={edu['endDate']}/>
                            </div>
                        </div>
                    </div>

                </div>
            ))}

            <div className="flex justify-between">

                <button type="button" className="my-back-btn" onClick={() => setStep(step - 1)}> Back </button>

                {resume.educationDetails.length < 3 &&
                    <button type="button" className="my-next-btn" onClick={addNew}>Add New</button>}

                <button type="button" className="my-next-btn" onClick={()=>validate(setStep,step)}> Next</button>
            </div>
        </div>
    )
}

export default EducationDetails

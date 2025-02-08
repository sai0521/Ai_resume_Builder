import React, { useState } from 'react';
import Description from './Description';
import formHandler from '../Hooks/formHandler';

const ProfessionalDetails = ({ setData,setRes }) => {

  const {step,setStep} = setData
  const {resume,setResume} = setRes

  const {details,styles,validate,handleChange} = formHandler(resume.ProfessionalDetails ,
    (name,value) =>{
      setResume((prev)=>({...prev,
        ProfessionalDetails:{...prev.ProfessionalDetails,[name]:value}
      }))
    }
  )


  return (
    <div className="w-full">
      <form className="flex flex-col gap-2">
        {/* <h1 className="bold text-4xl mb-5">Professional Details</h1> */}

        {Object.keys(details).map((key)=>(
          <div key={key} className='flex flex-col '>
            <label>{`Enter ${key}`}</label>
            <input type='text' className={styles[key]} name={key} value={details[key]} onChange={handleChange} />
          </div>
        ))}

        {/* <div className="flex justify-between">
          <button type="button" className="my-back-btn"
            onClick={() => setStep(step-1)}>
            Back
          </button>
          <button type="button" className="my-next-btn" onClick={()=> validate(setStep,step)}>Next</button>
        </div> */}
      </form>
    </div>
  );
};

export default ProfessionalDetails;

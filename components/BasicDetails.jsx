import React, { useState } from 'react';
import formHandler from '../Hooks/formHandler';
import ProfessionalDetails from './ProfessionalDetails';
import Description from './Description';

const BasicDetails = ({ setData, setRes }) => {

  const { step, setStep } = setData
  const { resume, setResume } = setRes

  const {details,styles,validate,handleChange} = formHandler(resume.basicDetails , 
    (name,value)=>{
      setResume((prev)=>({...prev,
        basicDetails:{...prev.basicDetails,[name]:value}}))
    }
  );


  return (
    <div className="w-full">
      <form className="flex flex-col gap-2">
        <h1 className="bold text-4xl mb-5">Basic Details</h1>

        {Object.keys(details).map((key) => (
          <div key={key} className='flex flex-col'>
            <label>{`Enter your ${key}`}</label>
            <input
              type="text"
              className={styles[key]}
              name={key}
              value={details[key]}
              onChange={handleChange}
              placeholder={`Eg. ${key}`}
            />
          </div>
        ))}

        {/* <Description setData={{step,setStep}} setRes={{resume,setResume}} Label={'Summary'}/> */}

        <div className="flex justify-end">
          <button type="button" className="my-next-btn" onClick={()=>validate(setStep,step)}> Next </button>
        </div>
      </form>
    </div>
  );
};

export default BasicDetails;

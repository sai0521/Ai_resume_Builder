import React, { useState } from 'react';
import BasicDetails from '../components/BasicDetails';
import ProfessionalDetails from '../components/ProfessionalDetails';
import EducationDetails from '../components/EducationDetails';
import Experience from '../components/Experience';
import ResumePreview from '../components/ResumePreview';

const PersonalDetails = () => {
  const [step, setStep] = useState(1);

  const [resume,setResume] = useState({
    basicDetails: {fullName : '',mobileNumber:'',Email:'',Address:''},
    ProfessionalDetails: {Profession:'',Field:'',Values:''},
    educationDetails: [],
    experience: []  
  })

  return (
    <div className='flex'>
      <div className='w-1/2 p-5  overflow-hidden relative'>
        {step === 1 && <BasicDetails setData={{step,setStep}} setRes={{resume,setResume}}/>}
        {step === 2 && <EducationDetails setData={{step,setStep}} setRes={{resume,setResume}}/>}
        {step === 3 && <Experience setStep={setStep} step={step}/>}
        {/* <ProfessionalDetails/> */}
      </div>

      {/* Static Right Section */}
      <div className='w-1/2 overflow-hidden relative'>
          <ResumePreview resume={resume} />
      </div>
    </div>
  );
};

export default PersonalDetails;

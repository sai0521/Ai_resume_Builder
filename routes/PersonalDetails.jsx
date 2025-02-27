import React, { useState } from 'react';
import BasicDetails from '../components/BasicDetails';
import EducationDetails from '../components/EducationDetails';
import Experience from '../components/Experience';
import Extra from '../components/Extra';
import Projects from '../components/Projects';
import Preview from '../components/Preview';
import PdfExportPage from '../components/PdfExportPage';
import { useAuth } from '../src/AuthContext.jsx';


const PersonalDetails = ({resume,setResume}) => {
  const {email} =useAuth()
  const [step, setStep] = useState(1);
  const {name} = useAuth()

  return (
    <div className="flex relative mt-20 h-screen">
      
      {/* Left Section: Details */}
      <div className="w-1/2 p-5 overflow-y-auto h-full bg-gray-100">
        {step === 1 && <BasicDetails setData={{ step, setStep }} setRes={{ resume, setResume }} />}
        {step === 2 && <EducationDetails setData={{ step, setStep }} setRes={{ resume, setResume }} />}
        {step === 3 && <Experience setData={{ step, setStep }} setRes={{ resume, setResume }} />}
        {step === 4 && <Projects setData={{ step, setStep }} setRes={{ resume, setResume }} />}
        {step === 5 && <Extra setData={{ step, setStep }} setRes={{ resume, setResume }} />}
      </div>

      {/* Right Section: Preview */}
      <div className="w-1/2 h-full overflow-y-auto bg-gray-400  p-5">
        {/* <Preview resume={resume}/> */}
        <PdfExportPage resume={resume}/>
      </div>
    </div>
  );
};

export default PersonalDetails;

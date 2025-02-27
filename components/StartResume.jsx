import React, { useEffect, useState } from 'react'
import PersonalDetails from '../routes/PersonalDetails';
import { useAuth } from '../src/AuthContext';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StartResume = () => {
    const {email,name}= useAuth();
    const location = useLocation();
    const Navigate = useNavigate();


    useEffect(()=>{
        const checkUser = ()=>{
            try{
                const token = localStorage.getItem("token");
                if(!token){
                    console.log("unauthorized user");
                    Navigate('/auth');
                }
            }catch(err){
                console.log(err);
            }
        }
        checkUser();
    },[]);


    const res = location.state?.resume || {
        userId: localStorage.getItem("email")||email,
        name: name,
        basicDetails: { fullName: '', mobileNumber: '', Email: '', Address: '' },
        educationDetails: [],
        experience: [],
        projects: [],
        Skill: [],
        Hobbie: [],
        Language: []
    };

    const [resume, setResume] = useState(res);

    return (
        <div>
            <PersonalDetails resume={resume} setResume={setResume}/>
        </div>
    )
}

export default StartResume

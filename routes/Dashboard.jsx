import React, { useEffect, useState } from 'react'
import Namebox from '../components/Namebox'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [fl, setFl] = useState(false);
  const navigate = useNavigate();
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token missing! User is unauthorized.");
          navigate('auth');
        }

        const { data } = await axios.get('http://localhost:3000/users/dashboard', {
          headers: { authorization: token }
        });

        console.log(data);


        const response = await axios.get(`http://localhost:3000/resumes/${data.user}`);
        setResumes(response.data.resumes);

      } catch (err) {
        console.error("Error fetching dashboard:", err.response ? err.response.data : err.message);
      }
    };

    fetchData();
  }, []); // 👈 Add dependency array to avoid infinite requests



  return (
    <div className='p-4 pl-[100px] relative mt-20'>
      <h1 className='pb-4 text-3xl font-bold'>My Resume</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>

        <button className="cursor-pointer bg-gray-300 text-white text-4xl w-[150px] h-[240px] rounded-lg 
                           shadow-xl flex items-center justify-center transition-all transform 
                           hover:scale-110 hover:bg-gray-500" onClick={() => {
            setFl(true);
          }}> +
        </button>

        {resumes.map((resume, ind) => (
          <div key={ind}>
            <button className="cursor-pointer bg-gray-300 text-white  w-[150px] h-[240px] rounded-lg 
                           shadow-xl flex items-center justify-center transition-all transform 
                           hover:scale-110 hover:bg-gray-500" onClick={() => {navigate('/StartResume',{state :{resume}})}}> 
            <p>{resume.name}</p>

            </button>
              
          </div>
        ))

        }

        {
          fl && <div
            className="fixed inset-0 flex items-center justify-center backdrop-blur bg-transparent"
            onClick={() => setFl(false)}>
            <div onClick={(e) => e.stopPropagation()} >
              <Namebox setFl={setFl} />
            </div>
          </div>
        }

      </div>



    </div>
  )
}

export default Dashboard

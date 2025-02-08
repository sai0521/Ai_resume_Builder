import React, { useState } from 'react'
import ProfessionalDetails from './ProfessionalDetails';
import formHandler from '../Hooks/formHandler';

const Description = ({ setData, setRes }) => {


    const { step, setStep } = setData
    const { resume, setResume } = setRes

    const [description, setDescription] = useState("");
    const [fl, setFl] = useState(false);
    const [btnText,setBtnText] = useState('Enable AI')


    const first = "p-3 w-full h-24 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none bg-white"

    const second = "p-3 w-full h-48 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none bg-white"

    const [tempName, setTempName] = useState(first)


    const EnableAI = (e) => {
        setFl(true);
        setTempName(second);
        setBtnText('Generate')
    };

    const DisableAI = (e) => {
        setFl(false)
        setTempName(first);
        setBtnText('Enable AI')
    };

    return (
        <div >

            <div className='flex gap-5 '>

                {fl === true && step===1 && <ProfessionalDetails setData={{ step, setStep }} setRes={{ resume, setResume }} />}

                <div className='flex flex-col w-full'>
                    <h1>Enter your Bio</h1>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className={tempName}
                    />

                </div>
            </div>

            <div className="flex justify-between w-1/2 items-center mb-4 ">

                {fl === true && <button type='button'
                    onClick={DisableAI}
                    className="px-4 py-2 mt-4 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600 transition-all"
                >Disable AI</button>}

                <button type='button'
                    onClick={EnableAI}
                    className="px-4 py-2 mt-4 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition-all"
                >{`${btnText}`}
                </button>
            </div>

        </div>
    )
}

export default Description

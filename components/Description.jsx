import React, { useState } from 'react'
import ProfessionalDetails from './ProfessionalDetails';
import formHandler from '../Hooks/formHandler';
import { AIChatSession } from '../AI/generateAI';
import Experience from './Experience';

const Description = ({ setData, setRes,Label,ind,prompt,name }) => {


    const { step, setStep } = setData
    const { resume, setResume } = setRes
    const prom = prompt

    const first = "p-3 w-full h-24 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none bg-white"

    const [btnText ,setBtnText] = useState("Ask AI")
    const [tempName, setTempName] = useState(first)


    const setDescription = (value) =>{
        setResume(prev => ({...prev,[name] :prev[name].map( (exp,i) => ind===i ? {...exp,description:value}:exp ) }))
    }

    const AIdescription = async() =>{
        setDescription("")
        setBtnText("Generating...")
        const prompt = JSON.stringify(resume)+prom
        console.log(prompt)
        const result = await AIChatSession.sendMessage(prompt)
        const desc = JSON.parse(result.response.text())
        console.log(desc[name])
        setDescription(desc[name][ind])
        setBtnText("Ask AI")
         
    }

    return (
        <div >

            <div className='flex gap-5 '>

                <div className='flex flex-col w-full gap-2'>
                    <label>{`${Label}`}</label>
                    <textarea
                        value={resume[name][ind]?.description || ''}
                        onChange={(e) => setDescription(e.target.value)}
                        className={tempName}
                    />

                </div>
            </div>

            <div className="flex justify-between w-1/2 items-center mb-4 ">

                <button type='button'
                    onClick={()=>AIdescription()}
                    className="px-4 py-2 mt-4 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 transition-all"
                >{`${btnText}`}
                </button>
            </div>

        </div>
    )
}

export default Description

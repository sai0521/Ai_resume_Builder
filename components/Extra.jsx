import React from 'react'
import SkillsInput from './SkillsInput'

const Extra = ({ setData, setRes }) => {

    const { step, setStep } = setData
    const { resume, setResume } = setRes
    return (
        <div>


            <label className="block text-lg font-medium ">Skills</label>
            <SkillsInput setRes={{ resume, setResume }} name={'Skill'} />

            <label className="block text-lg font-medium ">Hobbies</label>
            <SkillsInput setRes={{ resume, setResume }} name={'Hobbie'} />

            <label className="block text-lg font-medium ">Languages</label>
            <SkillsInput setRes={{ resume, setResume }} name={'Language'} />

            <div className="flex justify-between mt-10">

                <button type="button" className="my-back-btn" onClick={() => setStep(step - 1)}> Back </button>

                <button type="button" className="my-next-btn" > Next</button>
            </div>
        </div>
    )
}

export default Extra

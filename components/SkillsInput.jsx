import React, { useState } from 'react';

const SkillsInput = ({setRes,name}) => {

    const {resume,setResume} = setRes

    const [inputValue, setInputValue] = useState("");

    const addSkill = () => {
        if (inputValue.trim() && !resume[name].includes(inputValue)) {
            setResume(prev => ({...prev,[name] : [...prev[name],inputValue]}));
            setInputValue(""); // Clear input field
        }
    };

    const removeSkill = (skill) => {
        setResume(prev => ({...prev,[name] : prev[name].filter((s) => s !== skill)}));
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addSkill();
        }
    };

    return (
        <div className="p-4">
            <div className="flex gap-2 flex-wrap mb-4">
                {resume[name].map((skill, index) => (
                    <div key={index} className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                        {skill}
                        <button
                            onClick={() => removeSkill(skill)}
                            className="ml-2 text-red-500 hover:text-red-700"
                        >
                            &times;
                        </button>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder={`Add a ${name} and press Enter`}
                />
                <button
                    onClick={addSkill}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default SkillsInput;

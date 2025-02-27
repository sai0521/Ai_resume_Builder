import React, { useState } from 'react'

const formHandler = (initialState,updateResume) => {

    var first = "border p-2 rounded";                       // default border
    var second = 'border p-2 rounded border-red-500';       // error border

    const [details, setDetails] = useState(initialState);  // usestate for  details

    const [styles, setStyles] = useState(() => {           // usestate for styles 
            let temp = {};
            Object.keys(initialState).forEach((key) => { temp[key] = first });   // applies every input element first style
            return temp;
        }
    )


    // handling dynamic changes in form

    const handleChange = (e)=>{

        setDetails((prev)=>({...prev,[e.target.name]:e.target.value}));   // changes data in details usestate

        updateResume(e.target.name,e.target.value)                        // updates the data to resume

        setStyles((prev)=>({...prev,[e.target.name]:first}));             //  changes styles same as default it makes sure that after entry
    }

    // handling validation and next step

    const validate = (setStep,step)=>{

        let temp = {...styles}                            // temp map for modification

        let len=0
        Object.keys(details).forEach((key)=>{
            if(details[key]==='') temp[key]=second;       // changes border to error border if that field is empty
            else len++
        });

        setStyles(temp);                                  // sets styles
        
        if(len==Object.keys(details).length) setStep(step + 1); //next step
    }

    return {details,styles,validate,handleChange};
};

export default formHandler
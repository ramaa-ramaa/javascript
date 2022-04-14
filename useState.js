import React, {useState} from "react";
const StatePractice =() =>{
    const [inputValue, setinputValue] = useState("RAm");
    let onChange = (event) =>{
        const newValue= event.target.value;
        setinputValue(newValue);
    };
    return{
        <div>
        <input placeholder ="Enter text" onChange={onChange}
        {inputValue}
        </div>

    };
};
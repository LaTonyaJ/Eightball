import React, {useState} from "react";

const Eightball = ({answers}) => {
    const [msg, setMsg] = useState('Think of a question');
    const [color, setColor] = useState('black');
    let idx = Math.floor(Math.random() * answers.length); 
    return (
        <div 
        className="eightball" 
        style={{backgroundColor: color}}
        onClick={() => {
            setColor(answers[idx].color);
            setMsg(answers[idx].msg);    
        }}
        >
            <p className="eb-text">{msg}</p>
        </div>
    )
}

export default Eightball;
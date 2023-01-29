import React from 'react'

const InputBox = ({label, value}) => {
    return (
    <div className='input-box'>
        <p>{label}</p>
        <input type={"text"} defaultValue={value}></input>
    </div>
    );
}

export default InputBox;
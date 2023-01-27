import React from 'react'

const InputBox = ({label}) => {
    return (
    <div>
        <p>{label}</p>
        <input type={"text"}></input>
    </div>
    );
}

export default InputBox;
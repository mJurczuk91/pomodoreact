import React from 'react';

export const Input = ({id, type, defaultValue, onChange}) => {
    return <div className='border-t-2'>
        <label htmlFor={id}>Pomodoro length :</label>
        <input id={id} type={type} defaultValue={defaultValue} onChange={onChange}></input>
    </div>
}
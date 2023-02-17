import React from 'react';

export const Input = ({id, type, defaultValue, onChange, label}) => {
    return <div className='flex justify-between m-2 py-2 border-b-2 border-slate-400'>
        <label className='pr-4' htmlFor={id}>{label}</label>
        <input className='bg-gray-300 hover:bg-gray-100 focus:bg-gray-100 w-12' id={id} type={type} defaultValue={defaultValue} onChange={onChange}></input>
    </div>
}
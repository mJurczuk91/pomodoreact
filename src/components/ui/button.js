import React from 'react';

export const Button = ({value, onClick}) => {
    return <button 
        className={`px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20`}
        onClick={onClick}
        >
        {value}
    </button>
}
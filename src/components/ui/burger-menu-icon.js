import React from 'react';

export const BurgerMenuIcon = ({ onClick }) => {
    return <div onClick={onClick} className='absolute flex p-2 w-fit h-10 hover: cursor-pointer hover:bg-slate-500 hover:bg-opacity-20'>
        <div className="space-y-2">
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
            <span className="block w-8 h-0.5 bg-gray-600"></span>
        </div>
    </div>
}
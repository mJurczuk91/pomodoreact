import React from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ onCloseHandler, children }) => {
    return createPortal(
        <div className='fixed top-0 left-0 h-full w-full bg-slate-700 opacity-50' onClick={onCloseHandler}>
            <div className='rounded-md bg-slate-200-200 p-8 fixed left-1/2 -translate-x-1/2 w-72'>
                {children}
            </div>
        </div>
        , document.getElementById("modal")
    );
}
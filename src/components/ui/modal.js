import React from 'react';
import { createPortal } from 'react-dom';

export const Modal = ({ onCloseHandler, children }) => {
    return createPortal(<>
            <div className='fixed top-0 left-0 h-full w-full bg-slate-700 opacity-50' onClick={onCloseHandler}></div>
            <div className='fixed left-1/2 -translate-x-1/2 w-fit p-8 rounded-md bg-slate-200'>
                <div className='flex flex-col'>
                {children}
                </div>
            </div>
    </>, document.getElementById("modal")
    );
}
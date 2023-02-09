import React from 'react';

const Header = ({modeButtonClicked, toggleMenuVisibility}) => {
    return <header className=' border-white border-b-4'>
        <div className=' absolute flex p-2 w-fit h-10 hover: cursor-pointer hover:bg-slate-500 hover:bg-opacity-20'>
            <div onClick={toggleMenuVisibility} className="space-y-2">
                <span className="block w-8 h-0.5 bg-gray-600"></span>
                <span className="block w-8 h-0.5 bg-gray-600"></span>
                <span className="block w-8 h-0.5 bg-gray-600"></span>
            </div>
        </div>

        <div className='h-10 flex justify-around'>
            <button name="pomodoro" className={`px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20`} onClick={() => { modeButtonClicked("pomodoro"); }}>Pomodoro</button>
            <button name="shortBreak" className={`px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20`} onClick={() => { modeButtonClicked("shortBreak"); }}>Short Break</button>
            <button name="longBreak" className={`px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20`} onClick={() => { modeButtonClicked("longBreak"); }}>Long Break</button>
        </div>
    </header>
}

export default Header;
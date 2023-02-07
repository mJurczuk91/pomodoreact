import React from 'react';

const Header = ({modeButtonClicked, toggleMenuVisibility}) => {
    return <header className='bg-green-400'>
        <div className=' absolute flex p-2 bg-red-400 w-fit h-10 hover: cursor-pointer'>
            <div onClick={toggleMenuVisibility} className="space-y-2">
                <span class="block w-8 h-0.5 bg-gray-600"></span>
                <span class="block w-8 h-0.5 bg-gray-600"></span>
                <span class="block w-8 h-0.5 bg-gray-600"></span>
            </div>
        </div>

        <div className='bg-yellow-400 h-10 flex justify-around'>
            <button name="pomodoro" className={`px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20`} onClick={() => { modeButtonClicked("pomodoro"); }}>Pomodoro</button>
            <button name="shortBreak" className={`px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20`} onClick={() => { modeButtonClicked("shortBreak"); }}>Short Break</button>
            <button name="longBreak" className={`px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20`} onClick={() => { modeButtonClicked("longBreak"); }}>Long Break</button>
        </div>
    </header>
}

export default Header;
import React from 'react';

const Modal = ({
    pomodoro,
    shortBreak,
    longBreak,
    pomodorosBeforeLongBreak,
    toggleMenuVisibility,
    setTaskLength,
}) => {
    let changeHandler = (task, length) => {
        setTaskLength(task, length);
    }

    return (<>
    <div className='fixed h-full w-full bg-slate-700 opacity-50' onClick={toggleMenuVisibility}></div>
    <div className=' rounded-md bg-slate-200 mt-8 fixed left-1/2 -translate-x-1/2 w-72'>
                <div className='flex justify-between items-baseline text-lg p-2 border-b-white border-b-2'>
                    <h2>Settings</h2>
                    <h2 className='close' onClick={toggleMenuVisibility}>&times;</h2>
                </div>

                <div className='text-lg p-2'>

                    <div className='border-t-2'>
                        <p>Pomodoro length :</p>
                        <input type={"number"} defaultValue={pomodoro} onChange={(e) => { changeHandler('pomodoro', e.target.value) }}></input>
                    </div>

                    <div className='border-t-2'>
                        <p>Short break :</p>
                        <input type={"number"} defaultValue={shortBreak} onChange={(e) => { changeHandler('shortBreak', e.target.value) }}></input>
                    </div>

                    <div className='border-t-2'>
                        <p>Long break :</p>
                        <input type={"number"} defaultValue={longBreak} onChange={(e) => { changeHandler('longBreak', e.target.value) }}></input>
                    </div>

                    <div className='border-t-2 border-b-2'>
                        <p>Pomodoros before long break :</p>
                        <input type={"number"} defaultValue={pomodorosBeforeLongBreak} onChange={(e) => { changeHandler('pomodorosBeforeLongBreak', e.target.value) }}></input>
                    </div>
                </div>
            </div>
    </>      
    );
}

export default Modal;
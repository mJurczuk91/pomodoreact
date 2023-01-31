import React from 'react';

const Modal = ({
    pomodoro,
    shortBreak,
    longBreak,
    pomodorosBeforeLongBreak,
    sessions,
    toggleMenuVisibility,
    isMenuVisible,
    setTaskLength
}) => {
    let changeHandler = (task, length) => {
        setTaskLength(task, length);
    }

    return (
        <div className='modal' style={{display:  isMenuVisible ? 'block' : 'none' }}>

            <div className='modal-header'>
                <h2>Settings</h2>
                <h2 className='close' onClick={toggleMenuVisibility}>&times;</h2>
            </div>

            <div className='modal-body'>

                <div className='modal-menu-element'>
                    <p>Pomodoro length :</p>
                    <input type={"number"} defaultValue={pomodoro} onChange={(e) => {changeHandler('pomodoro', e.target.value)}}></input>
                </div>

                <div className='modal-menu-element'>
                    <p>Short break :</p>
                    <input type={"number"} defaultValue={shortBreak} onChange={(e) => {changeHandler('shortBreak', e.target.value)}}></input>
                </div>

                <div className='modal-menu-element'>
                    <p>Long break :</p>
                    <input type={"number"} defaultValue={longBreak} onChange={(e) => {changeHandler('longBreak', e.target.value)}}></input>
                </div>

                <div className='modal-menu-element'>
                    <p>Pomodoros before long break :</p>
                    <input type={"number"} defaultValue={pomodorosBeforeLongBreak} onChange={(e) => {changeHandler('pomodorosBeforeLongBreak', e.target.value)}}></input>
                </div>

                <div className='modal-menu-element'>
                    <p>Number of sessions :</p>
                    <input type={"number"} defaultValue={sessions} onChange={(e) => {changeHandler('sessions', e.target.value)}}></input>
                </div>
            </div>
        </div>
    );
}

export default Modal;
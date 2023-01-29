import React from 'react';
import InputBox from './input_box';

const Modal = ({
    pomodoro,
    shortBreak,
    longBreak,
    pomodorosBeforeLongBreak,
    sessions,
    toggleMenuVisibility,
    isMenuVisible
}) => {
    return (
        <div className='modal' style={{display:  isMenuVisible ? 'block' : 'none' }}>
            <div className='modal-header'>
                <h2>Settings</h2>
                <h2 className='close' onClick={toggleMenuVisibility}>&times;</h2>
            </div>
            <div className='modal-body'>
                <InputBox label={'pomodoro minutes:'} value={pomodoro}/>
                <InputBox label={'short break:'} value={shortBreak}/>
                <InputBox label={'long break:'} value={longBreak}/>
                <InputBox label={'pomodoros before long break:'} value={pomodorosBeforeLongBreak} />
                <InputBox label={'number of sessions:'} value={sessions} />
            </div>
        </div>
    );
}

export default Modal;
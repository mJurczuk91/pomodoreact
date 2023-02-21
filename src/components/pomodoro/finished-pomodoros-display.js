import React, { useContext } from 'react';
import SettingsContext from '../store/settings-context';


const FinishedPomodorosDisplay = () => {
    const {pomodorosBeforeLongBreak, pomodorosDone} = useContext(SettingsContext);
    let maxPomodoros = pomodorosBeforeLongBreak;
    let finishedPomodorosMarkers = () => {
        let arr = [];
        for (let i = 0; i < pomodorosDone; i++) {
            arr.push(true);
            maxPomodoros--;
        }
        while (maxPomodoros > 0) {
            arr.push(false);
            maxPomodoros--;
        }
        return arr;
    }

    return <div className='w-fit mx-auto pb-4'>
        <div className='flex align-baseline'>
            <p className='text-xl font-bold'>Pomodoros completed:</p>
            {finishedPomodorosMarkers().map((dot, index) => {
                return <span key={index} className={`${dot ? 'bg-lime-800 w-8 h-8 rounded-lg' : 'w-8 h-8 rounded-full border-4 border-lime-800 mx-2'}`}></span>;
            })}
        </div>
    </div>
}

export default FinishedPomodorosDisplay;

import React, {useState, useEffect, useContext} from 'react';
import SettingsContext from '../store/settings-context';
import { Button } from '../ui/button';
import FinishedPomodorosDisplay from './finished-pomodoros-display';

const toSeconds = (min) => min * 60;

const Timer = () => {
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [intervalID, setIntervalID] = useState(null);

    const ctx = useContext(SettingsContext);
    const {currentTask, duration, taskDidFinish} = ctx;

    const resetTimer = () => {
        if(intervalID){
            clearInterval(intervalID);
            setIntervalID(null);
        }
        setTimeElapsed(0);
    }

    useEffect(resetTimer, [currentTask, duration[currentTask]]);

    const toggleCountdown = () => {
        if (!intervalID) {
            setIntervalID(
                setInterval(() => {
                    setTimeElapsed(timeElapsed => timeElapsed +1);
                    if(timeElapsed === toSeconds(duration[currentTask])){
                        resetTimer();
                        taskDidFinish();
                    }
                }, 1000)
            );
        } else {
            clearInterval(intervalID);
            setIntervalID(null);
        }
    }

    const parseTime = () => {
        let min = Math.floor((toSeconds(duration[currentTask]) - timeElapsed) / 60);
        let sec = (toSeconds(duration[currentTask]) - timeElapsed) % 60;
        if(sec < 10) sec = `0${sec}`;
        return {
            min,
            sec,
        };
    }

    return <div className='p-4'>
        <p className='font-bold text-6xl text-center border-dashed border-black border-4'>{parseTime().min}:{parseTime().sec}</p>
        <div className={'p-4 flex justify-around'}>
            <Button value={intervalID ? 'PAUSE' : 'START'} onClick={toggleCountdown} />
            <Button value={'RESET'} onClick={resetTimer} />
        </div>
        <FinishedPomodorosDisplay />
    </div>
}

export default Timer;
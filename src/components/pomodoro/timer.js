import React, {useState, useEffect} from 'react';
import { Button } from '../ui/button';

const Timer = ({initialSeconds, taskDidFinish}) => {
    let [timeElapsed, setTimeElapsed] = useState(0);
    let [intervalID, setIntervalID] = useState(null);

    const resetTimer = () => {
        if(intervalID){
            clearInterval(intervalID);
            setIntervalID(null);
        }
        setTimeElapsed(0);
    }

    useEffect(resetTimer, [initialSeconds]);

    const toggleCountdown = () => {
        if (!intervalID) {
            setIntervalID(
                setInterval(() => {
                    setTimeElapsed(++timeElapsed);
                    if(timeElapsed === initialSeconds){
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
        let sec = (initialSeconds - timeElapsed) % 60;
        let min = (initialSeconds - timeElapsed - sec) / 60;
        if(sec === 0) sec = '00';
        return {
            min,
            sec
        };
    }

    return <div className='p-4'>
        <p className='font-bold text-6xl text-center border-dashed border-black border-4'>{parseTime().min}:{parseTime().sec}</p>
        <div className={'p-4 flex justify-around'}>
            <Button value={intervalID ? 'PAUSE' : 'START'} onClick={toggleCountdown} />
            <Button value={'RESET'} onClick={resetTimer} />
        </div>
    </div>
}

export default Timer;
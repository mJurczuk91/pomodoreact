import React, {useState, useEffect} from 'react';

const Timer = ({initialSeconds}) => {
    let [timeElapsed, setTime] = useState(0);
    let [intervalID, setIntervalID] = useState(null);

    const resetTimer = () => {
        if(intervalID){
            clearInterval(intervalID);
            setIntervalID(null);
        }
        setTime(0);
    }

    useEffect(resetTimer, [initialSeconds]);

    const toggleCountdown = () => {
        if (!intervalID) {
            setIntervalID(
                setInterval(() => setTime(++timeElapsed), 1000)
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

    return <div className='timer'>
        <p className='timer-display'>{parseTime().min}:{parseTime().sec}</p>
        <div className='timer-modes'>
            <button className='button' onClick={toggleCountdown}>{intervalID ? 'PAUSE' : 'START'}</button>
            <button className='button' onClick={resetTimer}>RESET</button>
        </div>
    </div>
}

export default Timer;
import React, {useState, useEffect} from 'react';

const Timer = ({initialSeconds, taskDidFinish}) => {
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
                setInterval(() => {
                    setTime(++timeElapsed);
                    console.log(timeElapsed, initialSeconds);
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

    return <div className='bg-red-100 p-4'>
        <p className='font-bold text-4xl text-center bg-yellow-500'>{parseTime().min}:{parseTime().sec}</p>
        <div className='bg-green-100 p-4 flex justify-around'>
            <button className='font-bold rounded-md  border border-zinc-600' onClick={toggleCountdown}>{intervalID ? 'PAUSE' : 'START'}</button>
            <button className='font-bold  border-zinc-600' onClick={resetTimer}>RESET</button>
        </div>
    </div>
}

export default Timer;
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

    return <div className='p-4'>
        <p className='font-bold text-6xl text-center border-dashed border-black border-4'>{parseTime().min}:{parseTime().sec}</p>
        <div className={'p-4 flex justify-around'}>
            <button className='px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20' onClick={toggleCountdown}>{intervalID ? 'PAUSE' : 'START'}</button>
            <button className='px-4 font-bold text-lg hover:bg-slate-500 hover:bg-opacity-20' onClick={resetTimer}>RESET</button>
        </div>
    </div>
}

export default Timer;
import React, {useEffect, useState} from 'react';

const Timer = ({initialSeconds}) => {

    useEffect(() => {
        if(intervalID) clearInterval(intervalID);
        setTime(0);
    }, [initialSeconds]);

    let [timeElapsed, setTime] = useState(0);
    let [intervalID, setIntervalID] = useState(null);

    const toggleCountdown = () => {
        if (!intervalID) {
            let id = setInterval(() => {
                setTime(++timeElapsed);
            }, 1000);
            setIntervalID(id);
        } else {
            clearInterval(intervalID);
            setIntervalID(null);
        }
    }

    const parseTime = () => {
        let sec = (initialSeconds - timeElapsed) % 60;
        let min = (initialSeconds - timeElapsed - sec) / 60;
        if(sec === 0){
            sec = '00';
        }
        return {
            min,
            sec
        };
    }

    return <div onClick={toggleCountdown}>
        <p>{parseTime().min}:{parseTime().sec}</p>
    </div>
}

export default Timer;
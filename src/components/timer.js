import React, {useState} from 'react';
import TimerDisplay from './timer_display.js';

const Timer = ({minutes}) => {

    let [time, setTime] = useState(minutes * 60);
    let [intervalID, setIntervalID] = useState(null);
    console.log(time);
    const toggleCountdown = () => {
        if (!intervalID) {
            let id = setInterval(() => {
                setTime(time--);
            }, 1000);
            setIntervalID(id);
        } else {
            clearInterval(intervalID);
            setIntervalID(null);
        }
    }

    return <div>
        <div onClick={toggleCountdown}>START</div>
        <TimerDisplay seconds={time} />
    </div>;
}

export default Timer;
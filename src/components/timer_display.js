import React from 'react'

const TimerDisplay = ({seconds}) => {
    let parseTime = () => {
        let sec = seconds % 60;
        let min = (seconds - sec) / 60;
        if(sec === 0){
            sec = '00';
        }
        return {
            min,
            sec
        };
    }
    return <div>
        <p>{parseTime().min}:{parseTime().sec}</p>
    </div>
}

export default TimerDisplay;
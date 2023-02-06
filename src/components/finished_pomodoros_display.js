import React from 'react';


const FinishedPomodorosDisplay = ({pomodoros, maxPomodoros}) => {
    let dots = () => {
        let arr = [];
        for(let i = 0; i < pomodoros; i++){
            arr.push(true);
            maxPomodoros--;
        }
        while(maxPomodoros > 0){
            arr.push(false);
            maxPomodoros--;
        }
        return arr;
    }

    return <div>
        {dots().map((dot, index) => {
            return <span key={index} className={`${dot ? 'dot-finished' : 'dot'}`}></span>;
        })}
    </div>
}

export default FinishedPomodorosDisplay;

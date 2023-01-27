import React, { Component } from 'react';
import PlayButton from './play_button';
import InputBox from './input_box';

class Timer extends Component{
    render(){
        return (
            <div>
                <PlayButton />
                <InputBox label={"Pomodoro minutes:"}/>
                <InputBox label={"Short break:"}/>
                <InputBox label={"Long break:"}/>
            </div>
        )
    }
}

export default Timer;
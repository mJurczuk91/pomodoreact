import React, { Component } from 'react';
import TimerDisplay from './timer_display.js';

class Timer extends Component{
    state = {
        startTime: this.props.seconds,
        currentTime: this.props.seconds,
        intervalID: null
    };

    toggleCountdown = () => {
        if(!this.state.intervalID){
            let id = setInterval(()=>{
                this.setState({
                    currentTime: this.state.currentTime-1
                });
            }, 1000);
            this.setState({
                intervalID: id
            });
        } else {
            clearInterval(this.state.intervalID);
            this.setState({
                intervalID: null
            });
        }
    }

    render(){
        return <div>
            <div onClick={this.toggleCountdown}>START</div>
            <TimerDisplay seconds={this.state.currentTime}/>
        </div>;
    }
}

export default Timer;
import React, { Component } from 'react';
import Modal from './modal_menu/modal.js';

class Timer extends Component{
    state = {
        pomodoroMinutes: 25,
        shortBreak: 5,
        longBreak: 15,
        sessions: 3,
        pomodorosBeforeLongBreak: 3,
        isMenuVisible: true
    }

    toggleMenuVisibility = () => {
        let newState = this.state.isMenuVisible? false : true;
        this.setState({
            isMenuVisible: newState
        });
    }

    render(){
        return (
            <div className='timer'>
                <Modal 
                    pomodoro={this.state.pomodoroMinutes}
                    shortBreak={this.state.shortBreak}
                    longBreak={this.state.longBreak}
                    sessions={this.state.sessions}
                    pomodorosBeforeLongBreak={this.state.pomodorosBeforeLongBreak}
                    isMenuVisible={this.state.isMenuVisible}
                    toggleMenuVisibility={this.toggleMenuVisibility}
                />
                <div onClick={this.toggleMenuVisibility}>SETTINGS</div>
            </div>
        )
    }
}

export default Timer;
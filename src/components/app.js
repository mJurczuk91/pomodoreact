import React, { Component } from 'react'
import Modal from './modal_menu/modal.js';
import Timer from './timer.js';

class App extends Component {
    state = {
        tasks: {
            pomodoro: 25,
            shortBreak: 5,
            longBreak: 15
        },
        sessions: 3,
        pomodorosBeforeLongBreak: 3,
        isMenuVisible: true,
        currentTask: 'pomodoro',
    }
    toggleMenuVisibility = () => {
        this.setState({
            isMenuVisible: !(this.state.isMenuVisible)
        });
    }

    render() {
        return (
            <div className='timer'>
                <Modal
                    pomodoro={this.state.tasks.pomodoro}
                    shortBreak={this.state.tasks.shortBreak}
                    longBreak={this.state.tasks.longBreak}
                    sessions={this.state.sessions}
                    pomodorosBeforeLongBreak={this.state.pomodorosBeforeLongBreak}
                    isMenuVisible={this.state.isMenuVisible}
                    toggleMenuVisibility={this.toggleMenuVisibility}
                />
                <div onClick={this.toggleMenuVisibility}>SETTINGS</div>
                <Timer seconds={this.state.tasks[this.state.currentTask] * 60}/>
            </div>
        )
    }
}

export default App;
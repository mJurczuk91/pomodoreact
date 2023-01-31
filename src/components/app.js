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
        pomodoro: 25,
        sessions: 3,
        pomodorosBeforeLongBreak: 3,

        isMenuVisible: true,
        currentTask: 'pomodoro',

        timesFinished:{
            pomodoro: 0,
            shortBreak: 0,
            longBreak: 0
        }
    }

    toggleMenuVisibility = () => {
        console.log(this.state.pomodoro);
        this.setState({
            isMenuVisible: !(this.state.isMenuVisible)
        });
    }

    setTaskLength = (task, length) => {
        let literal = `tasks.${task}`;
        console.log(task, length);
        this.setState({
            tasks: {
                [task]: length
            }
        });
        //console.log(this.state.pomodoro);
    }

    render() {
        return (
            <div className='app'>
                <button className='button'>HEY YO</button>
                <Modal
                    pomodoro={this.state.pomodoro}
                    shortBreak={this.state.tasks.shortBreak}
                    longBreak={this.state.tasks.longBreak}
                    sessions={this.state.sessions}
                    pomodorosBeforeLongBreak={this.state.pomodorosBeforeLongBreak}
                    isMenuVisible={this.state.isMenuVisible}
                    toggleMenuVisibility={this.toggleMenuVisibility}
                    setTaskLength={this.setTaskLength}
                />
                <div onClick={this.toggleMenuVisibility}>SETTINGS</div>
                <Timer initialSeconds={(this.state.tasks[this.state.currentTask]) * 60}/>
            </div>
        )
    }
}

export default App;
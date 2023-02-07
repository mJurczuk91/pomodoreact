import React, { Component } from 'react'
import Modal from './modal_menu/modal.js';
import Timer from './timer.js';
import FinishedPomodorosDisplay from './finished_pomodoros_display.js';
import Header from './header.js';
import './css/style.css';

class App extends Component {
    state = {
        currentTask: 'pomodoro',
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 15,

        pomodorosBeforeLongBreak: 3,
        pomodorosDone: 0,

        isMenuVisible: false
    }

    taskDidFinish = () => {
        let nextTask = 'pomodoro';
        let setPomodorosDone = this.state.pomodorosDone;
        if (this.state.currentTask === 'pomodoro') {
            if (this.state.pomodorosDone === this.state.pomodorosBeforeLongBreak - 1) {
                setPomodorosDone = 0;
                nextTask = 'longBreak';
            }
            else {
                setPomodorosDone++;
                nextTask = 'shortBreak';
            }
        } else nextTask = 'pomodoro';

        this.setState({
            currentTask: nextTask,
            pomodorosDone: setPomodorosDone
        });
    }

    toggleMenuVisibility = () => {
        this.setState({
            isMenuVisible: !(this.state.isMenuVisible)
        });
        console.log(this.state.pomodorosDone);
    }

    setTaskLength = (task, length) => {
        this.setState({
            [task]: length
        });
    }

    modeButtonClicked = (taskName) => {
        this.setState({ currentTask: taskName })
    }

    render() {
        return (
            <div className=' m-auto'>
                <Modal
                    pomodoro={this.state.pomodoro}
                    shortBreak={this.state.shortBreak}
                    longBreak={this.state.longBreak}
                    sessions={this.state.sessions}
                    pomodorosBeforeLongBreak={this.state.pomodorosBeforeLongBreak}
                    isMenuVisible={this.state.isMenuVisible}
                    toggleMenuVisibility={this.toggleMenuVisibility}
                    setTaskLength={this.setTaskLength}
                />

                <div className='max-w-2xl m-auto'>
                    <Header toggleMenuVisibility={this.toggleMenuVisibility} modeButtonClicked={this.modeButtonClicked} />
                    <Timer initialSeconds={(this.state[this.state.currentTask]) * 60} taskDidFinish={this.taskDidFinish} />
                    <FinishedPomodorosDisplay pomodoros={this.state.pomodorosDone} maxPomodoros={this.state.pomodorosBeforeLongBreak} />
                </div>
            </div>
        )
    }
}

export default App;
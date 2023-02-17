import React, { Component } from 'react'
import { Modal } from './ui/modal';
import Timer from './pomodoro/timer';
import FinishedPomodorosDisplay from './pomodoro/finished-pomodoros-display.js';
import Header from './layout/header.js';
import './css/style.css';
import Settings from './layout/settings';

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
            <div className='m-auto mt-4'>
                {this.state.isMenuVisible && 
                <Modal onCloseHandler={this.toggleMenuVisibility}>
                    <Settings pomodoro={this.state.pomodoro} shortBreak={this.state.shortBreak} longBreak={this.state.longBreak} pomodorosBeforeLongBreak={this.state.pomodorosBeforeLongBreak} settingsChangeHandler={this.setTaskLength} closeSettingsWindowHandler={this.toggleMenuVisibility}/>
                </Modal>}

                <div className='max-w-2xl m-auto bg-slate-100'>
                    <Header toggleMenuVisibility={this.toggleMenuVisibility} modeButtonClicked={this.modeButtonClicked} />
                    <Timer initialSeconds={(this.state[this.state.currentTask]) * 60} taskDidFinish={this.taskDidFinish} />
                    <FinishedPomodorosDisplay pomodoros={this.state.pomodorosDone} maxPomodoros={this.state.pomodorosBeforeLongBreak} />
                </div>
            </div>
        )
    }
}

export default App;
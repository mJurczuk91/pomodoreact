import React, { Component } from 'react'
import Modal from './modal_menu/modal.js';
import Timer from './timer.js';
import FinishedPomodorosDisplay from './finished_pomodoros_display.js';
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
        if(this.state.currentTask === 'pomodoro'){
            if(this.state.pomodorosDone === this.state.pomodorosBeforeLongBreak - 1){
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
    
    modeButtonClicked = (event) => {
        this.setState({ currentTask: event.target.name })
    }

    render() {
        return (
            <div>
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

                <div>
                    <button onClick={this.toggleMenuVisibility} className="button">SETTINGS</button>
                </div>

                <div>
                    <div className='timer-modes'>
                        <button name="pomodoro" onClick={this.modeButtonClicked} className={`button ${this.state.currentTask === "pomodoro" ? 'active' : ''}`}>Pomodoro</button>
                        <button name="shortBreak" onClick={this.modeButtonClicked} className={`button ${this.state.currentTask === "shortBreak" ? 'active' : ''}`}>Short Break</button>
                        <button name="longBreak" onClick={this.modeButtonClicked} className={`button ${this.state.currentTask === "longBreak" ? 'active' : ''}`}>Long Break</button>
                    </div>

                    <Timer initialSeconds={(this.state[this.state.currentTask]) * 60} taskDidFinish={this.taskDidFinish} />
                    <div><hr/>Pomodoros completed: 
                        <FinishedPomodorosDisplay pomodoros={this.state.pomodorosDone} maxPomodoros={this.state.pomodorosBeforeLongBreak}></FinishedPomodorosDisplay>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
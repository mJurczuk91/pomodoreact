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

        isMenuVisible: false,
        currentTask: 'pomodoro',

        timesFinished: {
            pomodoro: 0,
            shortBreak: 0,
            longBreak: 0
        }
    }

    toggleMenuVisibility = () => {
        this.setState({
            isMenuVisible: !(this.state.isMenuVisible)
        });
    }

    setTaskLength = (task, length) => {
        this.setState({
            tasks: {
                [task]: length
            }
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
                    shortBreak={this.state.tasks.shortBreak}
                    longBreak={this.state.tasks.longBreak}
                    sessions={this.state.sessions}
                    pomodorosBeforeLongBreak={this.state.pomodorosBeforeLongBreak}
                    isMenuVisible={this.state.isMenuVisible}
                    toggleMenuVisibility={this.toggleMenuVisibility}
                    setTaskLength={this.setTaskLength}
                />

                <div className='header'>
                    <button onClick={this.toggleMenuVisibility} className="button">SETTINGS</button>
                </div>

                <div className='app'>
                    <div className='timer-modes'>
                        <button name="pomodoro" onClick={this.modeButtonClicked} className={`button ${this.state.currentTask === "pomodoro" ? 'active' : ''}`}>Pomodoro</button>
                        <button name="shortBreak" onClick={this.modeButtonClicked} className={`button ${this.state.currentTask === "shortBreak" ? 'active' : ''}`}>Short Break</button>
                        <button name="longBreak" onClick={this.modeButtonClicked} className={`button ${this.state.currentTask === "longBreak" ? 'active' : ''}`}>Long Break</button>
                    </div>

                    <Timer initialSeconds={(this.state.tasks[this.state.currentTask]) * 60} />
                </div>
            </div>
        )
    }
}

export default App;
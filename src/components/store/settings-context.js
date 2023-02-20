import React from 'react';

const SettingsContext = React.createContext({
    currentTask: '',

    duration: {
        pomodoro: 0,
        shortBreak: 0,
        longBreak: 0,
    },

    pomodorosBeforeLongBreak: 0,
    pomodorosDone: 0,

    isMenuVisible: false,

    taskDidFinish: () => { },
    toggleMenuVisibility: () => { },
    changeTaskDuration: () => { },
    changeCurrentTask: () => { },
    changePomodorosBeforeLongBreak: () => {},
});

export default SettingsContext;
import React, { useReducer } from "react";
import SettingsContext from "./settings-context";
import settingsReducer from "./settings-reducer";

const SettingsProvider = (props) => {

    const taskDidFinish = () => {
        dispatchSettingsChange({
            type: 'TASK_DID_FINISH',
        });
    }

    const toggleMenuVisibility = () => {
        dispatchSettingsChange({
            type: 'TOGGLE_MENU_VISIBILITY',
        })
    }

    const changeTaskDuration = (task, duration) => {
        dispatchSettingsChange({
            type: 'TASK_DURATION_CHANGED',
            payload: {
                task,
                duration,
            }
        })
    }

    const changeCurrentTask = (task) => {
        dispatchSettingsChange({
            type: 'CHANGE_CURRENT_TASK',
            payload: {
                task,
            }
        })
    }

    const changePomodorosBeforeLongBreak = (number) => {
        dispatchSettingsChange({
            type: 'CHANGE_POMODOROS_BEFORE_LONG_BREAK',
            payload: {
                number,
            },
        })
    }

    const [settings, dispatchSettingsChange] = useReducer(settingsReducer, {
        currentTask: 'pomodoro',
        duration: {
            pomodoro: 25,
            shortBreak: 5,
            longBreak: 15,
        },
        pomodorosBeforeLongBreak: 3,
        pomodorosDone: 0,

        isMenuVisible: false,

        taskDidFinish,
        toggleMenuVisibility,
        changeTaskDuration,
        changeCurrentTask,
        changePomodorosBeforeLongBreak,
    });

    return <SettingsContext.Provider value={settings}>
        {props.children}
    </SettingsContext.Provider>
};

export default SettingsProvider;
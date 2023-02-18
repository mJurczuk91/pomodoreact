import React, {useContext, useReducer} from "react";
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
            type: 'CHANGE_TASK_DURATION',
            payload:{
                task,
                duration,
            }
        })
    }

    const changeCurrentTask = (task) => {
        dispatchSettingsChange({
            type: 'CHANGE_CURRENT_TASK',
            payload:{
                task,
            }
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
    });

    return <SettingsContext.Provider>
        {props.children}
    </SettingsContext.Provider>
};

export default SettingsProvider;
const settingsReducer = (prevState, action) => {
    switch (action.type) {
        case 'TASK_DID_FINISH':
            return taskDidFinishHandler(prevState);
        case 'TOGGLE_MENU_VISIBILITY':
            return toggleMenuVisibilityHandler(prevState);
        case 'TASK_DURATION_CHANGED': {
            return taskDurationChangedHandler(prevState, action.payload);
        }
        case 'CHANGE_CURRENT_TASK':{
            return changeCurentTaskHandler(prevState, action.payload)
        }
        default:
            console.error('!!!SETTINGS_CHANGE_INCORRECT_ACTION_TYPE!!!')
    }
}

const changeCurentTaskHandler = (prevState, {newTask}) => {
    const newState = {...prevState};
    newState.currentTask = newTask;
    return newState;
}

const taskDurationChangedHandler = (prevState, {task, newDuration}) => {
    const newState = {...prevState};
    newState.duration[task] = newDuration;
    return newState;
}

const toggleMenuVisibilityHandler = (prevState) => {
    const newState = {...prevState};
    newState.isMenuVisible = !prevState.isMenuVisible;
    return newState;
}

const taskDidFinishHandler = (prevState) => {
    const newState = {...prevState};
    switch (prevState.currentTask){
        case 'pomodoro':
            if(prevState.pomodorosDone === prevState.pomodorosBeforeLongBreak -1){
                newState.pomodorosDone = 0;
                newState.currentTask = 'longBreak';
            } else {
                newState.pomodorosDone++;
                newState.currentTask = 'shortBreak';
            }
            break;
        default:{
            newState.currentTask = 'pomodoro';
        }
    }
    return newState;
}

export default settingsReducer;
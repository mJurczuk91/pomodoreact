const settingsReducer = (prevState, action) => {
    switch (action.type) {
        case 'TASK_DID_FINISH':
            return taskDidFinishHandler(prevState);
        case 'TOGGLE_MENU_VISIBILITY':
            return toggleMenuVisibilityHandler(prevState);
        case 'TASK_DURATION_CHANGED': {
            console.log(action.payload);
            return taskDurationChangedHandler(prevState, action.payload);
        }
        case 'CHANGE_CURRENT_TASK': {
            return changeCurentTaskHandler(prevState, action.payload);
        }
        case 'CHANGE_POMODOROS_BEFORE_LONG_BREAK':{
            return changePomodorosBeforeLongBreak(prevState, action.payload);
        }
        default:
            console.error(`!!!SETTINGS_CHANGE_INCORRECT_ACTION_TYPE!!! -- ${action.type}`);
    }
}

const changePomodorosBeforeLongBreak = (prevState, {number}) => {
    const newState = {...prevState};
    newState.pomodorosBeforeLongBreak = number;
    return newState;
}

const changeCurentTaskHandler = (prevState, { task }) => {
    const newState = { ...prevState };
    newState.currentTask = task;
    return newState;
}

const taskDurationChangedHandler = (prevState, { task, duration }) => {
    const newState = { ...prevState };
    newState.duration[task] = duration;
    return newState;
}

const toggleMenuVisibilityHandler = (prevState) => {
    const newState = { ...prevState };
    newState.isMenuVisible = !prevState.isMenuVisible;
    return newState;
}

const taskDidFinishHandler = (prevState) => {
    const newState = { ...prevState };
    switch (prevState.currentTask) {
        case 'pomodoro':
            if (prevState.pomodorosDone === prevState.pomodorosBeforeLongBreak - 1) {
                newState.pomodorosDone = 0;
                newState.currentTask = 'longBreak';
            } else {
                newState.pomodorosDone++;
                newState.currentTask = 'shortBreak';
            }
            break;
        default: {
            newState.currentTask = 'pomodoro';
        }
    }
    return newState;
}

export default settingsReducer;
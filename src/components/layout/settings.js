import React, { useContext } from 'react';
import SettingsContext from '../store/settings-context';
import { Input } from '../ui/input';

const Settings = () => {
    const {duration,pomodorosBeforeLongBreak, changeTaskDuration, changePomodorosBeforeLongBreak, toggleMenuVisibility} = useContext(SettingsContext);
    const {pomodoro, shortBreak, longBreak} = duration;
    return <>
        <div className='flex justify-between items-baseline text-lg p-2'>
            <h2>Settings</h2>
            <h2 className='close' onClick={toggleMenuVisibility}>&times;</h2>
        </div>
        <Input id={"pomodoro"} type={"number"} defaultValue={pomodoro} onChange={e => {changeTaskDuration('pomodoro', e.target.value)}} label={'Pomodoro length: '} />
        <Input id={"shortBreak"} type={"number"} defaultValue={shortBreak} onChange={e => {changeTaskDuration('shortBreak', e.target.value)}} label={'Short break length: '} />
        <Input id={"longBreak"} type={"number"} defaultValue={longBreak} onChange={e => {changeTaskDuration('longBreak', e.target.value)}} label={'Long break length length: '} />
        <Input id={"pomodorosBeforeLongBreak"} type={"number"} defaultValue={pomodorosBeforeLongBreak} onChange={e => {changePomodorosBeforeLongBreak(e.target.value)}} label={'Pomodoros before long break: '} />
    </>
}

export default Settings;
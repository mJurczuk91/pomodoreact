import React from 'react';
import { Input } from '../ui/input';

const Settings = ({ pomodoro, shortBreak, longBreak, pomodorosBeforeLongBreak, settingsChangeHandler, closeSettingsWindowHandler }) => {

    return <>
        <div className='flex justify-between items-baseline text-lg p-2'>
            <h2>Settings</h2>
            <h2 className='close' onClick={closeSettingsWindowHandler}>&times;</h2>
        </div>
        <Input id={"pomodoro"} type={"number"} defaultValue={pomodoro} onChange={e => {settingsChangeHandler('pomodoro', e.target.value)}} label={'Pomodoro length: '} />
        <Input id={"shortBreak"} type={"number"} defaultValue={shortBreak} onChange={e => {settingsChangeHandler('shortBreak', e.target.value)}} label={'Short break length: '} />
        <Input id={"longBreak"} type={"number"} defaultValue={longBreak} onChange={e => {settingsChangeHandler('longBreak', e.target.value)}} label={'Long break length length: '} />
        <Input id={"pomodorosBeforeLongBreak"} type={"number"} defaultValue={pomodorosBeforeLongBreak} onChange={e => {settingsChangeHandler('pomodorosBeforeLongBreak', e.target.value)}} label={'Pomodoros before long break: '} />
    </>
}

export default Settings;
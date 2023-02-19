import React, {useContext} from 'react'
import { Modal } from './ui/modal';
import Timer from './pomodoro/timer';
import FinishedPomodorosDisplay from './pomodoro/finished-pomodoros-display.js';
import Header from './layout/header.js';
import './css/style.css';
import Settings from './layout/settings';
import SettingsContext from './store/settings-context';

const App = () => {
    const {isMenuVisible, toggleMenuVisibility} = useContext(SettingsContext)

    return (
        <div className='m-auto mt-4'>
            {isMenuVisible &&
                <Modal onCloseHandler={toggleMenuVisibility}>
                    <Settings />
                </Modal>}

            <div className='max-w-2xl m-auto bg-slate-100'>
                <Header />
                <Timer />
            </div>
        </div>
    )
}

export default App;
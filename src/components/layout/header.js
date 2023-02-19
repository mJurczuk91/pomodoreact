import React, { useContext } from 'react';
import SettingsContext from '../store/settings-context';
import { BurgerMenuIcon } from '../ui/burger-menu-icon';
import { Button } from '../ui/button';

const Header = () => {
    const { toggleMenuVisibility, changeCurrentTask } = useContext(SettingsContext)

    return (
        <header className='border-white border-b-4'>
            <BurgerMenuIcon onClick={toggleMenuVisibility} />
            <div className='h-10 flex justify-around'>
                <Button value={'Pomodoro'} onClick={() => changeCurrentTask("pomodoro")} />
                <Button value={'Short Break'} onClick={() => changeCurrentTask("shortBreak")} />
                <Button value={'Long Break'} onClick={() => changeCurrentTask("longBreak")} />
            </div>
        </header>)
}

export default Header;
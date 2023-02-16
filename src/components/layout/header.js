import React from 'react';
import { BurgerMenuIcon } from '../ui/burger-menu-icon';
import { Button } from '../ui/button';

const Header = ({modeButtonClicked, toggleMenuVisibility}) => {
    return <header className=' border-white border-b-4'>
        <BurgerMenuIcon onClick={toggleMenuVisibility}/>
        <div className='h-10 flex justify-around'>
            <Button value={'Pomodoro'} onClick={() =>  modeButtonClicked("pomodoro")}/>
            <Button value={'Short Break'} onClick={() =>  modeButtonClicked("shortBreak")}/>
            <Button value={'Long Break'} onClick={() =>  modeButtonClicked("longBreak")}/>
        </div>
    </header>
}

export default Header;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import SettingsProvider from './components/store/settings-provider';

const Pomodoro = () => {
  return (
    <SettingsProvider>
      <App />
    </SettingsProvider>
  )
}

ReactDOM.render(<Pomodoro />, document.querySelector('#root'));
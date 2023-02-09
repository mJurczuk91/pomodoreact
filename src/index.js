import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const Pomodoro = () => {
  return (
    <App />
  )
}

ReactDOM.render(<Pomodoro />, document.querySelector('#root'));
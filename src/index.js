import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const Pomodoro = () => {
  return (
    <div className=' bg-blue-200'>
      <App />
    </div>
  )
}

ReactDOM.render(<Pomodoro />, document.querySelector('#root'));
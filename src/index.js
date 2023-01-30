import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const Pomodoro = () => {
  return (
    <div>
      <App />
    </div>
  )
}

ReactDOM.render(<Pomodoro />, document.querySelector('#root'));
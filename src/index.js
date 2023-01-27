import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './components/timer';

const App = () => {
  return (
    <div>
      <Timer />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
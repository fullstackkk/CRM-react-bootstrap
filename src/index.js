import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/app/app';
import CounterApp from './Components/counter/counter'




ReactDOM.render(
  <StrictMode>
    <App />
    {/* <CounterApp counter={5} /> */}
  </StrictMode>,
  document.getElementById('root')
);


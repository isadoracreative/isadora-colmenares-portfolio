import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/custom.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/isadora-colmenares-portfolio">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

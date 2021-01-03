import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import GameApp from './GameApp';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GameApp />
  </React.StrictMode>,
  document.getElementById('root')
);

//Change function for debugging and prformance testing
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

import { cards } from './cards'

ReactDOM.render(
  // <React.StrictMode>
    <Card img_src={cards[0].img_src} />,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

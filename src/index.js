import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const authors = [
  {
    name: '',
    imageUrl: 'images/logo192.png',
    imageSource: '',
    books: ['Uno', 'Dos', 'Tres']
  }
];

const state = {
  turnData: {
    author: authors[0],
    books: authors[0].books
  }
};

ReactDOM.render(<App {...state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

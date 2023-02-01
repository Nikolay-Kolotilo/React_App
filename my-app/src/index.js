import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const elem = <h2>Hello World!</h2>;
// const elem = React.createElement(//В createElement мы должны передать 3 аргумента:
//   'h2',// - Название элемента в версткею h2
//   // null,// - Название класса, если его нет - null.
//   {className: 'greetings'}, //Вместо null можно передать ОБЪЕКТ!! с полем className
//   'Hello World!' //Содержимое тега
// );

const elem = (
  <div>
    <h2>Hello World!</h2>
    <input type="text" />
    <button />
    <button></button>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{elem}  </React.StrictMode>
);



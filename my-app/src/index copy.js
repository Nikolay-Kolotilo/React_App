import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';



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
    <App />
 </React.StrictMode>
);



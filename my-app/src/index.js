import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
// import reportWebVitals from './reportWebVitals';



// const elem = (
//   <div>
//     <h2>Hello World!</h2>
//     <input type="text" />
//     <button />
//     <button></button>
//   </div>
// )
// const elem = React.createElement(); // При этом React - это класс, а createElement - метод этого класса.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



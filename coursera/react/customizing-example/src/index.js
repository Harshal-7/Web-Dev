import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bag from './components/propsNchildern/Bag';
import Apple from './components/propsNchildern/Apple';
import Pears from './components/propsNchildern/Pears';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Bag>
        <Apple color="red" number="5" />
      </Bag>

      <Bag>
        <Pears name="Luffy"/>
      </Bag>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

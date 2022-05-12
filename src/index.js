import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import '../src/boot/index.css';
import App from './boot/App.tsx';
import store from './redux/store'

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <Provider store = {store}>
    <App />
  </Provider>
);



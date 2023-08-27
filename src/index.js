import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import products from './reducers/index'
import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux'
const store=legacy_createStore(products)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>

        <App />
    </Provider>
);

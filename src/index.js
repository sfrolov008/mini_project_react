import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';

import './index.css';
import {App} from './App';

import {setupStore} from "./redux";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = setupStore()

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


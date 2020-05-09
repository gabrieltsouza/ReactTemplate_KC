import React, {  Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
    <BrowserRouter>
    <Suspense fallback={<div>Loading (Suspense component) ...</div>}>
        <App />
    </Suspense>
    </BrowserRouter> 
), document.getElementById('root_main'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

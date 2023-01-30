import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux';
import Context from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Context>
            <Provider store={store}>
                <App />
            </Provider>
        </Context>
    </BrowserRouter>
    
);


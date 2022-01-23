import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

// Step 1: feelings reducer
const feelingsReducer = (state = '', action) => {
    switch (action.type) {
        case 'FEELINGS':
            console.log('feelingsReducer payload:', action.payload)
            return Number(action.payload);
        case 'RESET':
            return '';
    }
    return state;
}

// Step 2: understanding reducer
const understandingReducer = (state = '', action) => {
    switch (action.type) {
        case 'UNDERSTANDING':
            console.log('understandingReducer payload:', action.payload)
            return Number(action.payload);
        case 'RESET':
            return '';
    }
    return state;
}

// Step 3: support reducer
const supportReducer = (state = '', action) => {
    switch (action.type) {
        case 'SUPPORT':
            console.log('supportReducer payload:', action.payload)
            return Number(action.payload);
        case 'RESET':
            return '';
    }
    return state;
}

// Step 4: comments reducer
const commentsReducer = (state = '', action) => {
    switch (action.type) {
        case 'COMMENTS':
            console.log('commentsReducer payload:', action.payload)
            return action.payload;
        case 'RESET':
            return '';
    }
    return state;
}

// Store
const store = createStore(
    combineReducers({
        feelingsReducer,
        understandingReducer,
        supportReducer,
        commentsReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

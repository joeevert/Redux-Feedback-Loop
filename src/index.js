import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// redux additions
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feedbackReducer = (state = {feeling: '', understanding: '', support: '', comments: ''}, action) => {
    // switch statement to check what action was dispatched for feedback inputs
    switch (action.type) {
        case 'ADD_FEELING':
            console.log('in ADD_FEELING', action.payload);
            state = { ...state, ...action.payload }
            // state.feeling = action.payload.feeling
            break;
        case 'ADD_UNDERSTANDING':
            console.log('in ADD_UNDERSTANDING', action.payload);
            state = { ...state, ...action.payload }
            // state.understanding = action.payload.understanding
            break;
        case 'ADD_SUPPORT':
            console.log('in ADD_SUPPORT', action.payload);
            state = { ...state, ...action.payload }
            // state.support = action.payload.support
            break;
        case 'ADD_COMMENTS':
            console.log('in ADD_COMMENTS', action.payload);
            state = { ...state, ...action.payload }
            // state.comments = action.payload.comments
            break;
        case 'RESET_STATE':
            console.log('in RESET_STATE');
            // state = { ...state, ...action.payload }
            state = {
                feeling: '', 
                understanding: '', 
                support: '', 
                comments: ''
            } 
            break;
        default:
            return state;
    }
    console.log('state is now:', state);
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
  )

ReactDOM.render(<Provider store = { storeInstance }><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
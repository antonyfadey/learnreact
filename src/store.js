import { createStore } from 'redux';
import rowsReducer from './reducer';

let preloadedState;

const persistedString = localStorage.getItem('countries');

if (persistedString) {
    preloadedState = {
        todos: JSON.parse(persistedString)
    }
}

const store = createStore(rowsReducer, preloadedState);

export default store
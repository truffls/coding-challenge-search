import { combineReducers } from 'redux';
import { SET_RESULTS } from './actions';

function results(state = [], action) {
    switch (action.type) {
        case SET_RESULTS:
            return action.payload.results;

        default:
            return state;
    }
}

export default combineReducers({
    results
});
import { createAction } from 'redux-actions';

import * as searchApi from './api';

export const SET_RESULTS = 'SET_RESULTS';

const setResults = createAction(SET_RESULTS, (results) => {
    return { results };
});

export const fetchResults = (query) => {
    return (dispatch) => {
        searchApi(query)
            .then((response) => {
                const { data } = response;

                dispatch(setResults(data.results));
            });
    };
};

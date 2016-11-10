import * as cheeseActions from '../actions/cheese';

const initialState = {
    cheeses: [],
    loading: false,
    error: null
};

export default (state=initialState, action) => {
    if (action.type === cheeseActions.FETCH_CHEESES_REQUEST) {
        return Object.assign({}, state, {
            loading: true
        });
    }
    else if (action.type === cheeseActions.FETCH_CHEESES_SUCCESS) {
        return Object.assign({}, state, {
            cheeses: action.cheeses,
            loading: false,
            error: null
        });
    }
    else if (action.type === cheeseActions.FETCH_CHEESES_ERROR) {
        return Object.assign({}, state, {
            error: action.error,
            loading: false
        });
    }
    return state;
};

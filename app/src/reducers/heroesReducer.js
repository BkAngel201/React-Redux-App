import {
    FETCHING_HEROES_LIST,
    FETCHING_SUCCESS,
    FETCHING_ERROR
} from '../actions/heroActions'



const initialState = {
    heroes: [],
    isFetching: false,
    errors: "" 
}




export const heroesReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_HEROES_LIST:
            return {
                ...state,
                isFetching: true
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                heroes: action.payload,
                isFetching: false,
                errors: ''
            }
        case FETCHING_ERROR: 
            return {
                ...state,
                heroes: [],
                isFetching: false,
                errors: action.payload
            }
        default: 
            return state
    }
}
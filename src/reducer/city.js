import { SET_CITY } from '../actions/actionCreators';

export const city  = (state, action) => {
    switch (action.type) {
        case SET_CITY:
         return { ...state, city: action.value}
        default:
        return state;
    }
    
}
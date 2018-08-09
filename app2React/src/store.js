import { createStore } from 'redux';

const initialState = {
    count: 0,
    countA: 0,
    countB: 0,
    countC: 0,
    countD: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                ...state,
                count: state.count - 1,
            };
        case 'ADD_TO_CART_A':
            return {
                ...state,
                countA: state.countA + 1,
            };
        case 'ADD_TO_CART_B':
            return {
                ...state,
                countB: state.countB + 1,
            };
        case 'ADD_TO_CART_C':
            return {
                ...state,
                countC: state.countC + 1,
            };
        case 'ADD_TO_CART_D':
            return {
                ...state,
                countD: state.countD + 1,
            };
        default:
            return state;
    }
}

export const storeInstance = createStore(reducer);
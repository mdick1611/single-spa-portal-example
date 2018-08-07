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
                count: state.count + 1
            };
        case 'DECREMENT':
            return {
                count: state.count - 1
            };
        case 'ADD_TO_CART_A':
            return {
               countA: state.countA + 1
            };
        case 'ADD_TO_CART_B':
            return {
                countB: state.countB + 1
            };
        case 'ADD_TO_CART_C':
            return {
                countC: state.countC + 1
            };
        case 'ADD_TO_CART_D':
            return {
                countD: state.countD + 1
            };
        default:
            return state;
    }
}

export const storeInstance = createStore(reducer);
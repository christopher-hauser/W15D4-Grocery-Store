const ADD_TO_CART = 'cart/addToCart';
const REMOVE_FROM_CART = 'cart/removeFromCart';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export const cartReducer = (state = {}, action) => {
    const currentId = action.id;
    let newState = {...state};
    switch (action.type) {
        case ADD_TO_CART:
            newState = {...state};
            newState[currentId] = {id: action.id, count: 1}
            return newState;
        case REMOVE_FROM_CART:
            newState = {...state};
            delete newState[currentId];
            return newState;
        default:
            return state;
    };
}

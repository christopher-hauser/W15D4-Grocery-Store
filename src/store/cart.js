const ADD_TO_CART = 'cart/addToCart';
const REMOVE_FROM_CART = 'cart/removeFromCart';
const UPDATE_CART = 'cart/updateCart';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id,
    };
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    };
};

export const updateCart = (id, count) => {
    return {
        type: UPDATE_CART,
        id,
        count
    };
};

// export const getAllCart = (state) => Object.values(state.cart);
export const getAllCart = (state) => state.cart.arr?.map(id => state.cart[id]);

export const cartReducer = (state = { arr: []}, action) => {
    const currentId = action.id;
    let newState = {...state};
    switch (action.type) {
        case ADD_TO_CART:
            newState = {...state};
            newState[currentId] = {id: action.id, count: 1}
            newState.arr.push(action.id);
            return newState;
        case REMOVE_FROM_CART:
            newState = {...state};
            newState.arr.splice(newState.arr.indexOf(currentId), 1);
            delete newState[currentId];
            return newState;
        case UPDATE_CART:
            newState = {...state};
            newState[currentId].count = action.count;
            return newState;
        default:
            return state;
    };
};
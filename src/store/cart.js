const ADD_TO_CART = 'cart/addToCart';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

const initialState = {
    cart: {},
    produce: {}
}

export const cartReducer = (state = initialState, action) => {
    const currentId = action.id;

    switch (action.type) {
        case ADD_TO_CART:
            const newState = {
                ...state,
                cart: {
                    ...state.cart,
                    currentId: {
                        id: action.id,
                        count: 1
                    }
                }
            };

            return newState;
    }
}

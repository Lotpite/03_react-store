const ADD_PRODUCT = 'ADD_PRODUCT';

let initialState = {
    productList: []
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
               productList: [
                   ...state.productList,
                   action.productDetails
               ]
            }
        }
        default: {
            return state;
        }
    }
}

export const addProductToCart = (productDetails) => {
    return {
        type: ADD_PRODUCT,
        productDetails
    }
}

export default CartReducer;
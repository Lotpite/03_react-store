const SET_PRODUCTS = 'SET_PRODUCTS',
    CHECK_FETCHING = 'CHECK_FETCHING';

let initialState = {
    productsList: null,
    isFetching: false
}

const ProductsReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_PRODUCTS: {
            return {
                ...state,
                productsList: action.productsList
            }
        }
        case CHECK_FETCHING: {
                return {...state, isFetching: action.isFetching}
        }
        default: {
            return state;
        }
    }
}


// export const setCategories = (categories) => ({type: SET_CATEGORIES, categories})
export const setProducts = (productsList) => ({type: SET_PRODUCTS, productsList})
export const isFetching = (isFetching) => ({type: CHECK_FETCHING, isFetching})

export default ProductsReducer;
const SET_PRODUCTS = 'SET_PRODUCTS',
    CHECK_FETCHING = 'CHECK_FETCHING',
    CHANGE_CURRENT_CURRENCY = 'CHANGE_CURRENT_CURRENCY';

let initialState = {
    productsList: null,
    isFetching: false,
    currentCurrency: null
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

        case CHANGE_CURRENT_CURRENCY: {
            return {
                ...state,
                currentCurrency: action.currentCurrency
            }
        }
        default: {
            return state;
        }
    }
}


// export const setCategories = (categories) => ({type: SET_CATEGORIES, categories})
export const setProducts = (productsList) => ({type: SET_PRODUCTS, productsList})
export const isFetching = (isFetching) => ({type: CHECK_FETCHING, isFetching})
export const changePrice = (currentCurrency) => ({type: CHANGE_CURRENT_CURRENCY, currentCurrency})

export default ProductsReducer;
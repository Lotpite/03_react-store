import ProductService from "../services/ProductService";

const SET_PRODUCTS = 'SET_PRODUCTS',
    CHECK_FETCHING = 'CHECK_FETCHING',
    CHANGE_CURRENT_CURRENCY = 'CHANGE_CURRENT_CURRENCY';

const ProductSerivce = new ProductService();

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

export const setProducts = (productsList) => ({type: SET_PRODUCTS, productsList})
export const isFetching = (isFetching) => ({type: CHECK_FETCHING, isFetching})
export const changePrice = (currentCurrency) => ({type: CHANGE_CURRENT_CURRENCY, currentCurrency})

export const getProducts = (categoryId) => {
    return (dispatch) => {
        ProductSerivce.getProductsByCategoryName(categoryId)
                .then(res => {
                    dispatch(setProducts(res))
                })
    }
}

export default ProductsReducer;
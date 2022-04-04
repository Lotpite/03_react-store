const SET_PRODUCT = 'SET_PRODUCT',
     SET_CURRENCY = 'SET_CURRENCY',
     SET_MAIN_IMG = 'SET_MAIN_IMG',
     CHANGE_ATTRIBUTE_ITEM = 'CHANGE_ATTRIBUTE_ITEM';

let initialState = {
    product: null,
    mainImg: null,
    activeAttribute: null,
    currencyLabel: 'USD'
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCT: {
            return {
                ...state,
                product: {...action.product}
            }
        }

        case SET_MAIN_IMG: {
            return {
                ...state,
                mainImg: action.img
            }
        }

        case CHANGE_ATTRIBUTE_ITEM: {
            return {
                ...state,
                activeAttribute: action.itemId
            }
        }

        case SET_CURRENCY: {
            return {
                ...state,
                currencyLabel: { ...action.currencyLabel}
            }
        }
        
        default: {
            return state
        }
    }
}

export const setProduct = (product) => {
    return {
        type: SET_PRODUCT,
        product
    }
}

export const setCurrency = (currencyLabel) => {
    return {
        type: SET_CURRENCY,
        currencyLabel
    }
}

export const setMainImg = (img) => {
    return {
        type: SET_MAIN_IMG,
        img
    }
}

export const changeAttributeItem = (itemId) => {
    return {
        type: CHANGE_ATTRIBUTE_ITEM,
        itemId
    }
}

export default ProductReducer;


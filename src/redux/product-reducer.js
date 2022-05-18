import ProductService from "../services/ProductService";

const SET_PRODUCT = 'SET_PRODUCT',
    SET_PRODUCT_ID = 'SET_PRODUCT_ID',
     SET_CURRENCY = 'SET_CURRENCY',
     SET_MAIN_IMG = 'SET_MAIN_IMG',
     CHANGE_ATTRIBUTE_ITEM = 'CHANGE_ATTRIBUTE_ITEM';

const NewProduct = new ProductService();

let initialState = {
    productId: null,
    details: null,
    mainImg: null,
    isActiveBig: true
}

const ProductReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCT: {
            return {
                ...state,
                details: {
                    ...action.details,
                    attributes: [
                        ...action.details.attributes.map(attribute => {
                            return {
                                ...attribute,
                                items: [
                                    ...attribute.items.map(item => {
                                        return {
                                            active: false,
                                            ...item
                                        }
                                    })
                                ]
                            }
    
                        })
                    ]
                }
            }
        }

        case SET_PRODUCT_ID: {
            return {
                ...state,
                productId: action.productId
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
                details: {
                    ...state.details,
                    attributes: [...state.details.attributes.map(attribute => {
                        if(attribute.id === action.attributeId) {
                            return {
                                ...attribute,
                                items: [...attribute.items.map(item => {
                                    if(item.id === action.itemId) {
                                        return {
                                            ...item, 
                                            active: true,
                                        }
                                    }
                                    return {
                                        ...item,
                                        active: false
                                    }
                                })]
                            }
                        }
                        return attribute
                    })
                ]}
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

export const setProduct = (details) => {
    return {
        type: SET_PRODUCT,
        details
    }
}

export const setProductId = (productId) => {
    return {
        type: SET_PRODUCT_ID,
        productId
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

export const changeAttributeItem = (attributeId, itemId) => {
    return {
        type: CHANGE_ATTRIBUTE_ITEM,
        attributeId,
        itemId
    }
}

export const getProduct = (productId) => {
    return (dispatch) => {
        NewProduct.getProductById(productId)
            .then(res => {
               dispatch(setProduct(res))
               dispatch(setMainImg(res.gallery[0]))
            })
    }
}

export default ProductReducer;


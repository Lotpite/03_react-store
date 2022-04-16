const ADD_PRODUCT = 'ADD_PRODUCT',
    CHANGE_ITEMS_QTY = 'CHANGE_ITEMS_QTY',
    CHANGE_MAIN_IMG = 'CHANGE_MAIN_IMG',
    TOGGLE_OVERLAY_ACTIVE = 'TOGGLE_OVERLAY_ACTIVE';

let initialState = {
    productList: [],
    activeCartOverlay: false
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT: {
            
            return {
                ...state,
               productList: [
                   ...state.productList,

                   {
                    ...action.productDetails,
                    attributes: action.productDetails.attributes.map(attribute => {
                        return {
                            ...attribute,
                            items: [
                                attribute.items.filter(item => item.active === false),
                                attribute.items.find(item => item.active === true)
                                
                                // ...attribute.items.map(item => {
                                //     return {
                                //         ...item,
                                //         active: true,
                                //     }
                                // })
                            ]
                            // items: [
                                
                            //     // attribute.items.find(item => item.active === true),
                            //     // attribute.items.find(item => item.active === false)
                            // ]
                        }
                    }),
                    quantity: 1,
                    imgIndex: 0
                    }
               ]
            }
        }
        case CHANGE_ITEMS_QTY: {
            return {
                ...state,
                productList: [
                    ...state.productList.map(product => {
                        if (product.id === action.productId) {
                            if (product.quantity + action.changeIndex < 1) {
                                return {
                                    ...product,
                                quantity: 1
                                }
                            }
                            return {
                                ...product,
                                quantity: product.quantity + action.changeIndex
                            }
                        }
                        return product
                    })
                ]
            }
        }
        case CHANGE_MAIN_IMG: {
            return {
                ...state,
                productList: [
                    ...state.productList.map(product => {
                        if(product.id === action.productId) {
                            if(product.imgIndex + action.changeIndex > product.gallery.length - 1) {
                                return {
                                    ...product,
                                    imgIndex: 0
                                }
                            }

                            if(product.imgIndex + action.changeIndex < 0) {
                                return {
                                    ...product,
                                    imgIndex: product.gallery.length - 1
                                }
                            }

                            return {
                                ...product,
                                imgIndex: product.imgIndex + action.changeIndex
                            }
                        }

                        return product
                    })
                ]
            }
        }
        case TOGGLE_OVERLAY_ACTIVE: {
            return {
                ...state,
                activeCartOverlay: action.isActive
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

export const changeItemsQty = (productId, changeIndex) => {
    return {
        type: CHANGE_ITEMS_QTY,
        productId,
        changeIndex
    }
}

export const changeMainImg = (productId, changeIndex) => {
    return {
        type: CHANGE_MAIN_IMG,
        productId,
        changeIndex
    }
}

export const toggleOverlayActive = (isActive) => {
    return {
        type: TOGGLE_OVERLAY_ACTIVE,
        isActive
    }
}


export default CartReducer;
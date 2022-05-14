const ADD_PRODUCT = 'ADD_PRODUCT',
    CHANGE_ITEMS_QTY = 'CHANGE_ITEMS_QTY',
    CHANGE_MAIN_IMG = 'CHANGE_MAIN_IMG',
    TOGGLE_OVERLAY_ACTIVE = 'TOGGLE_OVERLAY_ACTIVE',
    TOGGLE_CART_ACTIVE = 'TOGGLE_CART_ACTIVE',
    CHANGE_ATTRIBUTE_ITEM_CART = 'CHANGE_ATTRIBUTE_ITEM_CART';

let initialState = {
    productList: [],
    totalItems: null,
    activeCartOverlay: false,
    isActiveCart: false
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
                            if(attribute.items.find(item => item.active === true)) {
                                return {
                                    ...attribute,
                                    items: [
                                        attribute.items.find(item => item.active === false),
                                        attribute.items.find(item => item.active === true)
                                    ]
                                }
                            }
                            if(!attribute.items.find(item => item.active === true)) {
                                return {
                                    ...attribute,
                                    items: [
                                        {...attribute.items[0], active: true},
                                        attribute.items[1]
                                    ]
                                }
                            }
                            return attribute
                        }),
                        quantity: 1,
                        imgIndex: 0,
                        other_id: Math.floor(Math.random() * 1000)
                        }
                   ],
                   totalItems: state.totalItems + 1
                }
        }

        case CHANGE_ITEMS_QTY: 
            {let products = state.productList.map(product => {
                    if(product.other_id === action.productId) {
                        return {
                            ...product,
                            quantity: product.quantity + action.changeIndex,
                        }
                    }
                    return product
                })

            
                return {
                    ...state,
                    productList: [
                        ...products.filter(product => product.quantity > 0)
                    ],
                    totalItems: state.totalItems + action.changeIndex
                }}
    
        case CHANGE_MAIN_IMG: {
            return {
                ...state,
                productList: [
                    ...state.productList.map(product => {
                        if(product.other_id === action.productId) {
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
        case TOGGLE_CART_ACTIVE: {
            return {
                ...state,
                isActiveCart: action.isActive
            }
        }

        case CHANGE_ATTRIBUTE_ITEM_CART: {
            return {
                ...state,
                productList: [
                    ...state.productList.map(product => {
                        if(product.other_id === action.productId) {
                            return {
                                ...product,
                                attributes: [...product.attributes.map(attribute => {
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

                        return product
                    })
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

export const toggleCartActive = (isActive) => {
    return {
        type: TOGGLE_CART_ACTIVE,
        isActive
    }
}

export const changeAttributeItemCart = (productId, attributeId, itemId) => {
    return {
        type: CHANGE_ATTRIBUTE_ITEM_CART,
        productId,
        attributeId,
        itemId
    }
}


export default CartReducer;

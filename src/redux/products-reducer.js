const SET_CATEGORIES = 'SET_CATEGORiES',
    SET_PRODUCTS = 'SET_PRODUCTS';

let initialState = {
    categoriesList: [],
    productsList: []
}

const ProductsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORIES: {
            return {
                ...state, 
                categoriesList: action.categories.map(category => {
                    if (category.name === 'all') {
                        return {id: category.name, name:category.name, active: true}
                    }
                    return  {id: category.name, name:category.name, active: false}
                }
                )
            }
        }
        case SET_PRODUCTS: {
            return {
                ...state,
                categoriesList: state.categoriesList.map(category => {
                    if(action.categoryId === category.id) {
                        return {...category, active: true}
                    }
                    if(action.categoryId !== category.id) {
                        return {...category, active: false}
                    }
                    return category;
                }),
                productsList: action.products
            }
        }
        default: {
            return state;
        }
    }
}

export const setCategoriesCreator = (categories) => ({type: SET_CATEGORIES, categories})
export const setProductsCreator = (categoryId, products) => ({type: SET_PRODUCTS, categoryId, products});

export default ProductsReducer;
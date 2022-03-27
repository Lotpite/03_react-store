const CHANGE_ACTIVE = 'CHANGE_ACTIVE',
    SET_CATEGORiES = 'SET_CATEGORiES';

let initialState = {
    categoriesList: [
            {id: 0, name: 'All', active: false},
            {id: 1, name: 'Tech', active: true},
            {id: 2, name: 'Clothes', active: false}
        ],
    products: []
}

const ProductsReducer = (state = initialState, action) => {
    console.log(action.userId)
    switch(action.type) {
        case CHANGE_ACTIVE: {
            return {
                ...state,
                categoriesList: state.categoriesList.map(category => {
                    if(action.userId === category.id) {
                        return {...category, active: true}
                    }
                    if(action.userId !== category.id) {
                        return {...category, active: false}
                    }

                    return category;
                })
            }
        }
        case SET_CATEGORiES: {
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
        default: {
            return state;
        }
    }
}

export const toggleActiveCreator = (userId) => {
    return {
        type: CHANGE_ACTIVE,
        userId  
    }
} 

export const setCategoriesCreator = (categories) => ({type: SET_CATEGORiES, categories})

export default ProductsReducer;
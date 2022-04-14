const SET_CATEGORIES = 'SET_CATEGORiES',
    CHECK_FETCHING = 'CHECK_FETCHING',
    CHANGE_ACTIVE_CATEGORY = 'CHANGE_ACTIVE_CATEGORY';

let initialState = {
    categoriesList: null,
    activeCategory: null,
    isFetching: false
}

const CategoriesReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_CATEGORIES: {
           
            return {
                ...state, 
                categoriesList: action.categoriesList.map((category) => {
                        return {
                            ...category,
                            id: category.name
                        }
                }),
                activeCategory: action.categoriesList[0].name 
            }
        }

        case CHANGE_ACTIVE_CATEGORY: {
            return {
                ...state,
                activeCategory: action.categoryId
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



export const setCategories = (categoriesList) => ({type: SET_CATEGORIES, categoriesList})
export const changeActiveCategory = (categoryId) => ({type: CHANGE_ACTIVE_CATEGORY, categoryId})
export const isFetching = (isFetching) => ({type: CHECK_FETCHING, isFetching})

export default CategoriesReducer;
import ProductService from "../services/ProductService";

const SET_CATEGORIES = 'SET_CATEGORiES',
    CHECK_FETCHING = 'CHECK_FETCHING',
    CHANGE_ACTIVE_CATEGORY = 'CHANGE_ACTIVE_CATEGORY';

const CategoriesService = new ProductService();


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
                categoriesList: action.categoriesList.map((category, i) => {
                    if(i === 0) {
                        return {
                            ...category,
                            id: category.name,
                            active: false
                        }
                    }
                        return {
                            ...category,
                            id: category.name,
                            active: false
                        }
                }),
            }
        }

        case CHANGE_ACTIVE_CATEGORY: {
            return {
                ...state,
                categoriesList: [
                    ...state.categoriesList.map(category => {
                        if(category.id === action.categoryId) {
                            return {
                                ...category,
                                active: true
                            }
                        }
                        return {
                            ...category,
                            active: false
                        }
                    })
                ],
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

export const getCategories = () => {
    return (dispatch) => {
        CategoriesService.getCategoriesList()
            .then(res => {
                dispatch(setCategories(res))
            })  
    }
}

export default CategoriesReducer;
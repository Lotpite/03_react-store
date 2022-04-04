import { combineReducers, createStore } from 'redux';
import CategoriesReducer from './categories-reducer';
import ProductReducer from './product-reducer';
import ProductsReducer from './products-reducer';

let reducers = combineReducers({
    products: ProductsReducer,
    categories: CategoriesReducer,
    product: ProductReducer
});


let store = createStore(reducers); // please, check if switch in reducers return state by default :-)

export default store;
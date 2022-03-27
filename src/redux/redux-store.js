import { combineReducers, createStore } from 'redux';
import ProductsReducer from './products-reducer';

let reducers = combineReducers({
    categoriesList: ProductsReducer});

let store = createStore(reducers);

export default store;
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import CartReducer from './cart-reducer';
import CategoriesReducer from './categories-reducer';
import CurrencyReducer from './currency-reducer';
import ProductReducer from './product-reducer';
import ProductsReducer from './products-reducer';

let reducers = combineReducers({
    products: ProductsReducer,
    categories: CategoriesReducer,
    product: ProductReducer,
    currencies: CurrencyReducer,
    cart: CartReducer
});


let store = createStore(reducers, applyMiddleware(thunk)); 

export default store;
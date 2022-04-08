import { combineReducers, createStore } from 'redux';
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


let store = createStore(reducers); // please, check if switch in reducers return state by default :-)

export default store;
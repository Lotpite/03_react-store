import ProductService from "../services/ProductService";
import { changePrice } from "./products-reducer";

const SET_CURRENCY = 'SET_CURRENCY',
    CHANGE_ACTIVE_CURRENCY = 'CHANGE_ACTIVE_CURRENCY',
    TOGGLE_DROPDOWN_ACTIVE = 'TOGGLE_DROPDOWN_ACTIVE';

const CurrencyService = new ProductService();


let initialState = {
    currenciesList: null,
    activeCurrency: null,
    activeDropdownMenu: false
}

const CurrencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENCY: {
            return {
                currenciesList: action.currenciesList
            }
        }

        case CHANGE_ACTIVE_CURRENCY: {
            return {
                ...state,
                activeCurrency: {...action.currency}
            }
        }

        case TOGGLE_DROPDOWN_ACTIVE: {
                return {
                    ...state,
                    activeDropdownMenu: action.isActive
                }
        }

        default: {
            return state
        }
    }
}

export const setCurrency = (currenciesList) => {
    return ({
        type: SET_CURRENCY,
        currenciesList
    })
}

export const changeActiveCurrency = (currency) => {
    return ({
        type: CHANGE_ACTIVE_CURRENCY,
        currency
    })
}

export const toggleDropdownActive = (isActive) => {
    return ({
        type: TOGGLE_DROPDOWN_ACTIVE,
        isActive
    })
}

export const getCurrency = () => {
    return (dispatch) => {
        CurrencyService.getCurrenciesList()
                .then(currenciesList => {
                    dispatch(setCurrency(currenciesList))
                    dispatch(changeActiveCurrency(currenciesList[0]))
                    dispatch(changePrice(currenciesList[0]))
                })
    }
}

export default CurrencyReducer;
const SET_CURRENCY = 'SET_CURRENCY',
    CHANGE_ACTIVE_CURRENCY = 'CHANGE_ACTIVE_CURRENCY';

let initialState = {
    currenciesList: null,
    activeCurrency: null,
    isActiveDropdownMenu: false
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
                activeCurrency: action.currency
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

export default CurrencyReducer;
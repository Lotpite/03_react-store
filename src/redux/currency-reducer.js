const SET_CURRENCY = 'SET_CURRENCY',
    CHANGE_ACTIVE_CURRENCY = 'CHANGE_ACTIVE_CURRENCY',
    TOGGLE_DROPDOWN_ACTIVE = 'TOGGLE_DROPDOWN_ACTIVE';

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

export default CurrencyReducer;
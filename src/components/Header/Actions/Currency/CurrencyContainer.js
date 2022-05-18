import React, { Component } from 'react';
import { connect } from 'react-redux';

import Currency from './Currency';
import ProductService from '../../../../services/ProductService'
import { setCurrency, changeActiveCurrency, toggleDropdownActive, getCurrency } from '../../../../redux/currency-reducer'
import { toggleOverlayActive } from '../../../../redux/cart-reducer';
import { changePrice } from '../../../../redux/products-reducer';

import { Spinner } from '../../../styles/Spinner.styled';

class CurrencyContainer extends Component {

     CurrencyService = new ProductService();

    componentDidMount() {
        this.props.getCurrency();
    }

    onToggleDropdownActive = (isActive) => {
        this.props.toggleDropdownActive(isActive)
        this.props.toggleOverlayActive(false)
    }

    changeCurrency = (currency) => {
        this.props.changeActiveCurrency(currency)
        this.props.changePrice(currency)
    }

    render() { 
        if(!this.props.currencies.activeCurrency) {
            return <Spinner/>
        }
        return (
            <Currency 
            active={this.props.currencies.activeDropdownMenu} 
            onToggleDropdownActive = {this.onToggleDropdownActive} 
            currencies={this.props.currencies}
            changeCurrency={this.changeCurrency}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currencies: state.currencies,
        products: state.products
    }
}



export default connect(mapStateToProps,
    {
    setCurrency,
    changeActiveCurrency,
    toggleDropdownActive,
    changePrice,
    toggleOverlayActive,
    getCurrency
    })
    (CurrencyContainer);
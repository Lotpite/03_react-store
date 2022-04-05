import React, { Component } from 'react';
import Currency from './Currency';
import ProductService from '../../../../services/ProductService'
import { connect } from 'react-redux';
import { setCurrency, changeActiveCurrency, toggleDropdownActive } from '../../../../redux/currency-reducer'
import { changePrice } from '../../../../redux/products-reducer';
import { Spinner } from '../../../styles/Spinner.styled';

class CurrencyContainer extends Component {

     CurrencyService = new ProductService();

    componentDidMount() {

        this.CurrencyService
            .getCurrenciesList()
                .then(currenciesList => {
                    this.props.setCurrency(currenciesList)
                    this.changeCurrency(currenciesList[0])
                })
    }

    onToggleDropdownActive = (isActive) => {
        isActive ? this.props.toggleDropdownActive(false) : this.props.toggleDropdownActive(true)
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
    changePrice
    })
    (CurrencyContainer);
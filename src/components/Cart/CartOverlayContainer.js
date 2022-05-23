import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartOverlay from './CartOverlay';
import { changeItemsQty, changeMainImg, toggleOverlayActive, toggleCartActive, changeAttributeItemCart } from '../../redux/cart-reducer'
import { toggleDropdownActive } from '../../redux/currency-reducer';
import { Spinner } from '../styles/Spinner.styled';

class CartOverlayContainer extends Component {

    changeQty = (productId, changeType) => {
        this.props.changeItemsQty(productId, changeType)
    }

    changeSlide = (productId, changeType) => {
        this.props.changeMainImg(productId, changeType)
    }

    toggleActive = (isActive) => {
            this.props.toggleOverlayActive(!isActive)
            this.props.toggleCartActive(isActive)
            this.props.toggleDropdownActive(false)
    }

    changeActiveAttributeItemCart = (productId, attributeId, itemId) => {
        this.props.changeAttributeItemCart(productId, attributeId, itemId);
    }

    render() { 
        if(!this.props.productList) {
            return <Spinner />
        }

        let arr = this.props.productList.map(product => {
            return product.prices.find(price => price.currency.label === this.props.currentCurrency.label).amount * product.quantity
         })
        let totalCosts = arr.reduce((previosAmount, nextAmount) => previosAmount + nextAmount, 0).toFixed(2)

        return (
                <CartOverlay itemsQty={this.props.totalItems}
                productList={this.props.productList}
                currentCurrency={this.props.currentCurrency}
                changeQty={this.changeQty} 
                changeSlide={this.changeSlide}
                totalCosts={totalCosts}
                overlayActive={this.props.activeCartOverlay}
                toggleActive={this.toggleActive}
                isActiveCart={this.props.isActiveCart}
                changeActiveAttributeItemCart={this.changeActiveAttributeItemCart}/>            
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        productList: state.cart.productList,
        totalItems: state.cart.totalItems,
        activeCartOverlay: state.cart.activeCartOverlay,
        isActiveCart: state.cart.isActiveCart,
        currentCurrency: state.currencies.activeCurrency
    }
}

export default connect(mapStateToProps, {
    changeItemsQty,
    changeMainImg,
    toggleOverlayActive,
    toggleCartActive,
    toggleDropdownActive,
    changeAttributeItemCart
})(CartOverlayContainer);
import Cart from "./Cart";
import React, { Component } from 'react';
import { connect } from "react-redux";

import { StyledCategory } from "../styles/Category.styled";
import { changeItemsQty, changeMainImg, changeAttributeItemCart } from '../../redux/cart-reducer'
import { CartName } from "../styles/Cart.styled";
import { Spinner } from "../styles/Spinner.styled";


class CartContainer extends Component {

    changeQty = (productId, changeType) => {
        this.props.changeItemsQty(productId, changeType)
    }

    changeSlide = (productId, changeType) => {
        this.props.changeMainImg(productId, changeType)
    }

    changeActiveAttributeItemCart = (productId, attributeId, itemId) => {
        this.props.changeAttributeItemCart(productId, attributeId, itemId);
    }

    render() { 
        if(!this.props.cart.isActiveCart) {
            return <Spinner />
        }
        return (
            <StyledCategory>
                <CartName>Cart</CartName>
                <Cart productList={this.props.cart.productList}
                 currentCurrency={this.props.currentCurrency}
                 changeQty={this.changeQty} 
                 changeSlide={this.changeSlide}
                 isActiveCart={this.props.cart.isActiveCart}
                 changeActiveAttributeItemCart={this.changeActiveAttributeItemCart}/>
            </StyledCategory>
        );
    }
}
 
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        currentCurrency: state.currencies.activeCurrency
    }
}


export default connect(mapStateToProps, {
    changeItemsQty,
    changeMainImg,
    changeAttributeItemCart
})(CartContainer)
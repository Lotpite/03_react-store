import Cart from "./Cart";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { StyledCategory } from "../styles/Category.styled";
import { changeItemsQty, changeMainImg } from '../../redux/cart-reducer'
import { CartName } from "../styles/Cart.styled";


class CartContainer extends Component {

    componentDidMount() {
        console.log(this.props.cart.productList)
    }

    changeQty = (productId, changeType) => {
        this.props.changeItemsQty(productId, changeType)
    }

    changeSlide = (productId, changeType) => {
        console.log(productId, changeType)
        this.props.changeMainImg(productId, changeType)
    }

    render() { 
        return (
            <StyledCategory>
                <CartName>Cart</CartName>
                <Cart productList={this.props.cart.productList}
                 currentCurrency={this.props.currentCurrency}
                 changeQty={this.changeQty} 
                 changeSlide={this.changeSlide}/>
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
    changeMainImg
})(CartContainer)
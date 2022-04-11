import Cart from "./Cart";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { StyledCategory } from "../styles/Category.styled";


class CartContainer extends Component {

    componentDidMount() {
        console.log(this.props.cart.productList)
    }

    render() { 
        return (
            <StyledCategory>
                <h2>Cart</h2>
                <Cart productList={this.props.cart.productList} currentCurrency={this.props.currentCurrency}/>
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
export default connect(mapStateToProps, {})(CartContainer)
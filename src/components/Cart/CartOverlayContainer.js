import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartOverlay from './CartOverlay';
import { changeItemsQty, changeMainImg } from '../../redux/cart-reducer'

class CartOverlayContainer extends Component {

    changeQty = (productId, changeType) => {
        this.props.changeItemsQty(productId, changeType)
    }

    changeSlide = (productId, changeType) => {
        console.log(productId, changeType)
        this.props.changeMainImg(productId, changeType)
    }

    render() { 

        return (
                <CartOverlay itemsQty={this.props.productList.length}
                productList={this.props.productList}
                currentCurrency={this.props.currentCurrency}
                changeQty={this.changeQty} 
                changeSlide={this.changeSlide}/>            
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        productList: state.cart.productList,
        currentCurrency: state.currencies.activeCurrency
    }
}

export default connect(mapStateToProps, {
    changeItemsQty,
    changeMainImg
})(CartOverlayContainer);
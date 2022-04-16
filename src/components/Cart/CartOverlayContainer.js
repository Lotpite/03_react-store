import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartOverlay from './CartOverlay';
import { changeItemsQty, changeMainImg, toggleOverlayActive } from '../../redux/cart-reducer'
import { Spinner } from '../styles/Spinner.styled';

class CartOverlayContainer extends Component {

    changeQty = (productId, changeType) => {
        this.props.changeItemsQty(productId, changeType)
    }

    changeSlide = (productId, changeType) => {
        console.log(productId, changeType)
        this.props.changeMainImg(productId, changeType)
    }

    // countSum = (productList) => {
    //     return productList.map(product => {
    //         product.prices.map(price => {
    //             if (price.currency.label === this.props.currentCurrency.label) {
    //                 return {
    //                     ...price.amount
    //                 }
    //             }
    //             return 'hello';
    //         })
    //     })
    // }

    toggleActive = (isActive) => {
            this.props.toggleOverlayActive(!isActive)
    }


    render() { 
        if(!this.props.productList) {
            return <Spinner />
        }

           let arr = this.props.productList.map(product => {
              let amounts = product.prices.map(price => {
                   if (price.currency.label === this.props.currentCurrency.label) {
                       return price.amount
                   }
                   return 0;
               })
                let arrayOfAmounts = amounts.find(item => item > 0)
                return arrayOfAmounts
           })

        // let arr = this.props.productList.map(product => {
        //     let amounts = product.prices.find(price => price.currency.label === this.props.currentCurrency.label)
        //       let arrayOfAmounts = amounts.find(item => item > 0)
        //       return arrayOfAmounts
        //  })

        let totalCosts = arr.reduce((previosAmount, nextAmount) => previosAmount + nextAmount, 0)

        return (
                <CartOverlay itemsQty={this.props.productList.length}
                productList={this.props.productList}
                currentCurrency={this.props.currentCurrency}
                changeQty={this.changeQty} 
                changeSlide={this.changeSlide}
                totalCosts={totalCosts}
                overlayActive={this.props.activeCartOverlay}
                toggleActive={this.toggleActive}/>            
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        productList: state.cart.productList,
        activeCartOverlay: state.cart.activeCartOverlay,
        currentCurrency: state.currencies.activeCurrency
    }
}

export default connect(mapStateToProps, {
    changeItemsQty,
    changeMainImg,
    toggleOverlayActive
})(CartOverlayContainer);
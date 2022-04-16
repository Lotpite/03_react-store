import { Component } from "react";
import { Link } from "react-router-dom";
import emptyCart from '../../assets/images/emptyCart.svg';
import { CartSymbol, ItemsQty } from "../styles/Actions.styled";
import { CartButtons, CheckoutButton, OverlayContainer, Total, TotalAmount, TotalTitle, ViewBagButton } from "../styles/Cart.styled";
import { Spinner } from "../styles/Spinner.styled";
import Cart from "./Cart";

export default class CartOverlay extends Component {
    render () {
        if(!this.props.productList) {
            return <Spinner />
        }

        return (
            <div>
                <CartSymbol onClick={() => this.props.toggleActive(this.props.overlayActive)}>
                    <img src={emptyCart} alt="cart" />   
                    <ItemsQty>{this.props.itemsQty}</ItemsQty> 
                </CartSymbol>
                
                <OverlayContainer active={this.props.overlayActive}>
                    My Bag {this.props.itemsQty} {this.props.itemsQty > 1 ? 'items' : 'item'}
                    <Cart productList={this.props.productList}
                        currentCurrency={this.props.currentCurrency}
                        changeQty={this.props.changeQty} 
                        changeSlide={this.props.changeSlide}
                        small={true}/>
                    <Total>
                        <TotalTitle>Total:</TotalTitle>
                        <TotalAmount>{this.props.currentCurrency != null ? this.props.currentCurrency.symbol : '$'}{this.props.totalCosts}</TotalAmount>
                    </Total>
                    <CartButtons>
                        <Link to={`/cart`}>
                            <ViewBagButton onClick={() => this.props.toggleActive(this.props.overlayActive)}>view bag</ViewBagButton>
                        </Link>
                        <CheckoutButton>check out</CheckoutButton>
                    </CartButtons>
                        
                </OverlayContainer>
            </div>
        )
    }
}
import { Component } from "react";
import { Link } from "react-router-dom";
import emptyCart from '../../assets/images/emptyCart.svg';
import { CartSymbol, ItemsQty } from "../styles/Actions.styled";
import { OverlayContainer } from "../styles/Cart.styled";
import Cart from "./Cart";

export default class CartOverlay extends Component {
    render () {
        return (
            // <Link to={`/cart`}>
            //     <CartSymbol>
            //         <img src={Cart} alt="cart" />   
            //         <ItemsQty>{this.props.itemsQty}</ItemsQty> 
            //     </CartSymbol>
            // </Link>
            <div>
                <CartSymbol>
                    <img src={emptyCart} alt="cart" />   
                    <ItemsQty>{this.props.itemsQty}</ItemsQty> 
                </CartSymbol>
                
                <OverlayContainer>
                    My Bag {this.props.itemsQty} {this.props.itemsQty > 1 ? 'items' : 'item'}
                    <Cart productList={this.props.productList}
                        currentCurrency={this.props.currentCurrency}
                        changeQty={this.props.changeQty} 
                        changeSlide={this.props.changeSlide}
                        small={true}/>
                </OverlayContainer>
            </div>
        )
    }
}
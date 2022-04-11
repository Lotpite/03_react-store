import { Component } from "react";
import { Link } from "react-router-dom";
import Cart from '../../assets/images/emptyCart.png'

export default class CartOverlay extends Component {
    render () {
        return (
            <Link to={`/cart`}>
                <span>
                    <img src={Cart} alt="cart" />
                </span>
            </Link>
        )
    }
}
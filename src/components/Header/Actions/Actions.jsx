import { Component } from "react";
import CartOverlay from "./Cart/CartOverlay";
import Currency from "./Currency";

export default class Actions extends Component {
    render () {
        return (
            <div>
                <Currency />
                <CartOverlay />
            </div>
        )
    }
}
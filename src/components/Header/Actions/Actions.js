import { Component } from "react";
import { CartSymbol, ItemsQty, StyledActions } from "../../styles/Actions.styled";
import CurrencyContainer from "./Currency/CurrencyContainer";
import CartOverlayContainer from "../../Cart/CartOverlayContainer";

export default class Actions extends Component {
    render () {
        return (
            <StyledActions>
                {/* <span>
                    <CurrencyContainer />
                </span> */}
                    <CurrencyContainer />
                <CartOverlayContainer />
                
            </StyledActions>
        )
    }
}
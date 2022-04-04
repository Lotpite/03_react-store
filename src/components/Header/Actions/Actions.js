import { Component } from "react";
import { StyledActions } from "../../styles/Actions.styled";
import CartOverlay from "../../Cart/CartOverlay";
import CurrencyContainer from "./Currency/CurrencyContainer";

export default class Actions extends Component {
    render () {
        return (
            <StyledActions>
                <span>
                    <CurrencyContainer />
                </span>
                <span>
                    <CartOverlay />
                </span>
                
            </StyledActions>
        )
    }
}
import { Component } from "react";

import { StyledActions } from "../../styles/Actions.styled";

import CurrencyContainer from "./Currency/CurrencyContainer";
import CartOverlayContainer from "../../Cart/CartOverlayContainer";

export default class Actions extends Component {
    render () {
        return (
            <StyledActions>
                    <CurrencyContainer />
                <CartOverlayContainer />
                
            </StyledActions>
        )
    }
}
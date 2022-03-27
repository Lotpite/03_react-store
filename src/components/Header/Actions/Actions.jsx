import { Component } from "react";
import { StyledActions } from "../../styles/Actions.styled";
import CartOverlay from "../../Cart/CartOverlay";
import Currency from "./Currency";

export default class Actions extends Component {
    render () {
        return (
            <StyledActions>
                <span>
                    <Currency />
                </span>
                <span>
                    <CartOverlay />
                </span>
                
            </StyledActions>
        )
    }
}
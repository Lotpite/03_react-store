import { Component } from "react";
import { StyledHeader } from "../styles/Header.styled";
import Actions from "./Actions/Actions";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

class Header extends Component {
    render () {
        return (
            <StyledHeader>
                <Navigation state={this.props.categoriesList} onToggleActive={this.props.onToggleActive} />
                <Logo />
                <Actions />
            </StyledHeader>
        )
    }
}

export default Header;
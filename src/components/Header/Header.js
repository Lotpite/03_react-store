import { Component } from "react";

import Logo from "./Logo/Logo";
import { StyledHeader } from "../styles/Header.styled";

import Actions from "./Actions/Actions";
import NavigationContainer from "./Navigation/NavigationContainer";


class Header extends Component {

    render () {
        return (
            <StyledHeader>
                <NavigationContainer/>
                <Logo />
                <Actions />
            </StyledHeader>
        )
    }
}

export default Header;
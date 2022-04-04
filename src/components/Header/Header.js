import { Component } from "react";
import { StyledHeader } from "../styles/Header.styled";
import Actions from "./Actions/Actions";
import Logo from "./Logo/Logo";
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
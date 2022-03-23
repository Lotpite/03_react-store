import { Component } from "react";
import Actions from "./Actions/Actions";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";

class Header extends Component {
    render () {
        return (
            <div className="Header">
                <Navigation />
                <Logo />
                <Actions />
            </div>

        )
    }
}

export default Header;
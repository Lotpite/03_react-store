import { Component } from "react";
import { StyledLogo } from "../../styles/Logo.styled";
import Logotype from '../../../assets/images/logo.png'

export default class Logo extends Component {
    render () {
        return (
            <StyledLogo>
                <img src={Logotype} alt="Logo" />
            </StyledLogo>
        )
    }
}

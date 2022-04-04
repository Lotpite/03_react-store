import { Component } from "react";
import { CurrencyMenu, CurrencyWrapper, DropdownMenu, activeDropdownMenu } from "../../../styles/Currency.styled";
import arrowUp from '../../../../assets/images/arrowUp.png';
import arrowDown from '../../../../assets/images/arrowDown.png';


export default class Currency extends Component {


    render () {
        return (
            <CurrencyWrapper>
                <CurrencyMenu onClick={() => console.log('hi')}>
                    <span>$</span>
                    <img src={arrowDown} alt="" />
                </CurrencyMenu>
                <DropdownMenu active={this.props.active} onClick={() => console.log('hi')}>
                    <ul>
                        <li><span>$ USD</span></li>
                        <li><span>E EUR</span></li>
                        <li><span>J JAP</span></li>
                    </ul>
                </DropdownMenu>
            </CurrencyWrapper>
        )
    }
}
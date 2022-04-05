import { Component } from "react";
import { CurrencyMenu, CurrencyWrapper, DropdownMenu, activeDropdownMenu } from "../../../styles/Currency.styled";
import arrowUp from '../../../../assets/images/arrowUp.png';
import arrowDown from '../../../../assets/images/arrowDown.png';


export default class Currency extends Component {


    render () {
        let dropdownItems = this.props.currencies.currenciesList.map(currency => {
            return (
                <li key={currency.label}><span onClick={() => {
                    this.props.changeCurrency(currency)
                    this.props.onToggleDropdownActive(!this.props.active)
                }}>{currency.symbol} {currency.label}</span></li>
            )
        })

        return (
            <CurrencyWrapper>
                <CurrencyMenu onClick={() => this.props.onToggleDropdownActive(!this.props.active)}>
                    <span>{this.props.currencies.activeCurrency.symbol}</span>
                    <img src={arrowDown} alt="" />
                </CurrencyMenu>
                <DropdownMenu active={this.props.active}>
                    <ul>
                        {dropdownItems}
                    </ul>
                </DropdownMenu>
            </CurrencyWrapper>
        )
    }
}
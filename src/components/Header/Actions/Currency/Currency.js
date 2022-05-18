import { Component } from "react";

import { CurrencyMenu, CurrencyWrapper, DropdownMenu, DropdownItem } from "../../../styles/Currency.styled";
import arrowUp from '../../../../assets/images/arrowUp.svg';
import arrowDown from '../../../../assets/images/arrowDown.svg';


export default class Currency extends Component {


    render () {
        let dropdownItems = this.props.currencies.currenciesList.map(currency => {
            return (
                <DropdownItem  key={currency.label} 
                onClick={() => {
                this.props.changeCurrency(currency)
                this.props.onToggleDropdownActive(!this.props.active)
                }}>
                    {currency.symbol} {currency.label}
                </DropdownItem>
            )
        })

        return (
            <>
                <CurrencyWrapper>
                    <CurrencyMenu onClick={() => this.props.onToggleDropdownActive(!this.props.active)}>
                        <span>
                            {this.props.currencies.activeCurrency.symbol}
                        </span>
                        <img src={this.props.active ? arrowUp : arrowDown} alt="" />
                    </CurrencyMenu>
                    <DropdownMenu active={this.props.active}>
                            {dropdownItems}
                    </DropdownMenu>
                </CurrencyWrapper>
            </>
        )
    }
}
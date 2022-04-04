import { Component } from "react";
import { CurrencyMenu } from "../../styles/Currency.styled";
import arrowUp from '../../../assets/images/arrowUp.png'
import arrowDown from '../../../assets/images/arrowDown.png'


export default class Currency extends Component {
    render () {
        return (
            <CurrencyMenu onClick={() => console.log('hi')}>
                <span>$</span>
                <img src={arrowDown} alt="" />
            </CurrencyMenu>
        )
    }
}
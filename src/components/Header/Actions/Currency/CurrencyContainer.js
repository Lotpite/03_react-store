import React, { Component } from 'react';
import Currency from './Currency';

class CurrencyContainer extends Component {
    render() { 
        return (
            <Currency active={false}/>
        )
    }
}


export default CurrencyContainer;
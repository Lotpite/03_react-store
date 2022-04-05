import React, { Component } from 'react';
import { CardItem, CardContainer } from '../styles/ProductCard.styled'
import { Spinner } from '../styles/Spinner.styled';

class ProductsListPage extends Component {
    render() { 
        
        if (!this.props.products.productsList) {
            return <Spinner/>
        }

        let productsList = this.props.products.productsList.map(product => {
            let details = product.prices.map(price => {
                if(price.currency.label === this.props.products.currentCurrency.label) {
                    return (
                        <p key={price.currency.label}>{price.currency.label} {price.amount}</p>
                    )
                }
            })
            return (
                <CardItem key={product.id}>
                    <img src={product.gallery[0]} alt="" />
                    <h3>{product.name}</h3>
                        {details}
                    <button>Go to cart</button>
                </CardItem>
            )
        })


        return (
            <CardContainer>
                {productsList}
            </CardContainer>
        );
    }
}
 
export default ProductsListPage;
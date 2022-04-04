import React, { Component } from 'react';
import { CardItem, CardContainer } from '../styles/ProductCard.styled'
import { Spinner } from '../styles/Spinner.styled';

class ProductsListPage extends Component {
    render() { 
        
        if (!this.props.products.productsList) {
            return <Spinner/>
        }
        let productsList = this.props.products.productsList.map(product => {
            return (
                <CardItem key={product.id}>
                    <img src={product.gallery[0]} alt="" />
                    <h3>{product.name}</h3>
                    <p>{product.prices[0].currency.label} {product.prices[0].amount} </p>
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
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { CardItem, CardContainer, CartSpan, MainImg, OutStockLabel } from '../styles/ProductCard.styled'
import { Spinner } from '../styles/Spinner.styled';
import greenCart from '../../assets/images/greenCart.png'

class ProductsListPage extends Component {
    render() { 
        if (!this.props.products.productsList) {
            return <Spinner/>
        }

        let productsList = this.props.products.productsList.map(product => {
            let details = product.prices.filter(item => item.currency.label === this.props.currentCurrency.label).map(price => {
                return (
                    <p key={price.currency.label}>{price.currency.symbol}{price.amount}</p>
                )
            }) 
            
            return (
                <CardItem key={product.id} inStock={product.inStock}>
                    <Link to={`/products/${product.id}`} onClick={()=> this.props.setProductId(product.id)}> 
                        <MainImg src={product.gallery[0]} alt="" /> 
                    </Link>
                    <h3>{product.name}</h3>
                            {details}
                    <CartSpan onClick={() => product.inStock ? this.props.addToCart(product) : alert('Product is OUT OF STOCK')} >
                        <img src={greenCart} alt="addToCart"/>
                    </CartSpan>
                    <OutStockLabel inStock={product.inStock}>OUT OF STOCK</OutStockLabel>   
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

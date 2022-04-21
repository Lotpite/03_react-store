import React, { Component } from 'react';
import { CardItem, CardContainer, CartSpan, MainImg, OutStockLabel } from '../styles/ProductCard.styled'
import { Spinner } from '../styles/Spinner.styled';
import { Link } from 'react-router-dom';
import greenCart from '../../assets/images/greenCart.png'

class ProductsListPage extends Component {
    render() { 
        console.log(this.props.products.productsList)
        if (!this.props.products.productsList) {
            return <Spinner/>
        }

        let productsList = this.props.products.productsList.map(product => {
            //get price according to currentCurrency
            let details = product.prices.map(price => {
                if(price.currency.label === this.props.currentCurrency.label) {
                    return (
                        <p key={price.currency.label}>{price.currency.symbol}{price.amount}</p>
                    )
                }
            })
            return (
                <CardItem key={product.id} inStock={product.inStock}>
                    <MainImg src={product.gallery[0]} alt="" />
                    <Link to={`/products/${product.id}`} onClick={()=> this.props.setProductId(product.id)}>
                        <CartSpan>
                            <img src={greenCart} alt="addToCart"/>
                        </CartSpan>
                    </Link>
                    <h3>{product.name}</h3>
                        {details}
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
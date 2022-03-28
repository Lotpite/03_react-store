import React, { Component } from 'react';
import { CardItem, CardContainer } from '../styles/ProductCard.styled'

class ProductCard extends Component {
    render() { 
        let productsList = this.props.productsList.map(product => {
            return (
                <CardItem key={product.id}>
                    <img src="https://cdn.shopify.com/s/files/1/0087/6193/3920/products/DD1381200_DEOA_2_720x.jpg?v=1612816087" alt="" />
                    <h3>{product.name}</h3>
                    <p>$53 Price</p>
                    <button>Add item</button>
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
 
export default ProductCard;
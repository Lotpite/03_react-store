import React, { Component } from 'react';

import { ItemContent, ItemWrapper, ProductImgsBlock, ProductDescriptionBlock, Counter, Change, ImgWrapper, PrevSlide, NextSlide, Quantity, CartImg} from '../styles/Cart.styled';
import { AttributeItem, AttributesBlock, AttributesWrapper, AttributeTitle, DescriptionSubtitle, DescriptionTitle, PriceAmount } from '../styles/ProductPage.styled';
import { Spinner } from '../styles/Spinner.styled';

class Cart extends Component {
    render() { 
        if(!this.props.productList) {
            return <Spinner />
        }

        let content = this.props.productList.map(product => {
            let mainImg = product.gallery[product.imgIndex]
            let attributes = product.attributes.map(attribute => {
                let attributeItems = attribute.items.map(item => {
                    return (
                        <AttributeItem key={item.id}
                         active={item.active}
                         isBig={this.props.isActiveCart}
                         onClick={() => this.props.changeActiveAttributeItemCart(product.other_id, attribute.id, item.id)}
                         color={attribute.name === "Color" ? item.displayValue : false}>
                            {attribute.name === "Color" ? '' : item.displayValue}
                        </AttributeItem>
                    )
                })
                return (
                    <AttributesBlock key={attribute.id}>
                            <AttributeTitle isBig={this.props.isActiveCart}>{attribute.name}</AttributeTitle>
                            <AttributesWrapper>
                                {attributeItems}
                            </AttributesWrapper>
                    </AttributesBlock>
                )
            })

            let prices = product.prices.filter(item => item.currency.label === this.props.currentCurrency.label).map(price => {
                return (
                    <PriceAmount key={price.currency.label} isBig={this.props.isActiveCart}>
                         <span >{price.currency.symbol}</span>
                         <span>{price.amount}</span>
                     </PriceAmount>
                )
            })             

            return (
                <ItemContent key={product.other_id} isBig={this.props.isActiveCart}>
                    <ProductDescriptionBlock key={product.name} isBig={this.props.isActiveCart}>
                        <DescriptionTitle isBig={this.props.isActiveCart}>{product.name}</DescriptionTitle>
                        <DescriptionSubtitle isBig={this.props.isActiveCart}>{product.brand}</DescriptionSubtitle>
                        {prices}
                        {attributes}
                    </ProductDescriptionBlock>
                    <ProductImgsBlock>
                        <Counter>
                            <Change onClick={() => this.props.changeQty(product.other_id, 1)} isBig={this.props.isActiveCart}>+</Change>
                            <Quantity isBig={this.props.isActiveCart}>{product.quantity}</Quantity>
                            <Change onClick={() => this.props.changeQty(product.other_id, -1)} isBig={this.props.isActiveCart}>-</Change>
                        </Counter>
                        <ImgWrapper>
                            <PrevSlide onClick={() => this.props.changeSlide(product.other_id, -1)} isBig={this.props.isActiveCart}>{'<'}</PrevSlide>
                                <CartImg src={mainImg} isBig={this.props.isActiveCart}></CartImg>
                            <NextSlide onClick={() => this.props.changeSlide(product.other_id, 1)} isBig={this.props.isActiveCart}>{'>'}</NextSlide>
                        </ImgWrapper>
                    </ProductImgsBlock>
                </ItemContent>
            )
        })

        return (
            <ItemWrapper isBig={this.props.isActiveCart}>
                {content}
            </ItemWrapper>
        )
    }
}
 
export default Cart;
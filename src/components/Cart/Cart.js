import React, { Component } from 'react';
import { ItemContent, ItemWrapper, ProductImgsBlock, ProductDescriptionBlock, Counter, Change, ImgWrapper, PrevSlide, NextSlide, Line, Quantity, CartImg } from '../styles/Cart.styled';
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
                         isBig={this.props.isActiveCart}>
                            <p>{item.displayValue}</p>
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

            let prices = product.prices.map(price => {
                if(price.currency.label === this.props.currentCurrency.label) {
                    return (
                        <PriceAmount key={price.currency.label} isBig={this.props.isActiveCart}>
                             <span >{price.currency.symbol}</span>
                             <span>{price.amount}</span>
                         </PriceAmount>
                    )
                }
            })

            

            return (
                 <ItemContent key={product.id}>
                    <ProductDescriptionBlock key={product.name} isBig={this.props.isActiveCart}>
                        <DescriptionTitle isBig={this.props.isActiveCart}>{product.name}</DescriptionTitle>
                        <DescriptionSubtitle isBig={this.props.isActiveCart}>{product.brand}</DescriptionSubtitle>
                        {prices}
                        {attributes}
                    </ProductDescriptionBlock>
                    <ProductImgsBlock>
                        <Counter>
                            <Change onClick={() => this.props.changeQty(product.id, 1)} isBig={this.props.isActiveCart}>+</Change>
                            <Quantity isBig={this.props.isActiveCart}>{product.quantity}</Quantity>
                            <Change onClick={() => this.props.changeQty(product.id, -1)} isBig={this.props.isActiveCart}>-</Change>
                        </Counter>
                        <ImgWrapper>
                            <PrevSlide onClick={() => this.props.changeSlide(product.id, -1)} isBig={this.props.isActiveCart}>{'<'}</PrevSlide>
                            <span>
                                <CartImg src={mainImg} isBig={this.props.isActiveCart}></CartImg>
                            </span>
                            <NextSlide onClick={() => this.props.changeSlide(product.id, 1)} isBig={this.props.isActiveCart}>{'>'}</NextSlide>
                        </ImgWrapper>
                    </ProductImgsBlock>
                </ItemContent>
            )
        })

        return (
            <ItemWrapper>
                <Line></Line>
                {content}
            </ItemWrapper>
        )
    }
}
 
export default Cart;
import React, { Component } from 'react';
import { ItemContent, ItemWrapper, ProductImgsBlock, ProductDescriptionBlock, Counter, Change, ImgWrapper, PrevSlide, NextSlide, Line, Quantity } from '../styles/Cart.styled';
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
                        <AttributeItem key={item.id} active={item.active}>
                            <p>{item.displayValue}</p>
                        </AttributeItem>
                    )
                })
                return (
                    <AttributesBlock key={attribute.id}>
                            <AttributeTitle>{attribute.name}</AttributeTitle>
                            <AttributesWrapper>
                                {attributeItems}
                            </AttributesWrapper>
                    </AttributesBlock>
                )
            })

            let prices = product.prices.map(price => {
                if(price.currency.label === this.props.currentCurrency.label) {
                    return (
                        <PriceAmount key={price.label}>
                             <span>{price.currency.symbol}</span>
                             <span>{price.amount}</span>
                         </PriceAmount>
                    )
                }
            })

            

            return (
                <ItemWrapper key={product.id}>
                    <Line></Line>
                 <ItemContent>
                    <ProductDescriptionBlock>
                        <DescriptionTitle>{product.name}</DescriptionTitle>
                        <DescriptionSubtitle>{product.brand}</DescriptionSubtitle>
                        {prices}
                        {attributes}
                    </ProductDescriptionBlock>
                    <ProductImgsBlock>
                        <Counter>
                            <Change onClick={() => this.props.changeQty(product.id, 1)}>+</Change>
                            <Quantity>{product.quantity}</Quantity>
                            <Change onClick={() => this.props.changeQty(product.id, -1)}>-</Change>
                        </Counter>
                        <ImgWrapper>
                            <PrevSlide onClick={() => this.props.changeSlide(product.id, -1)}>{'<'}</PrevSlide>
                            <span>
                                <img src={mainImg}></img>
                            </span>
                            <NextSlide onClick={() => this.props.changeSlide(product.id, 1)}>{'>'}</NextSlide>
                        </ImgWrapper>
                    </ProductImgsBlock>
                </ItemContent>
            </ItemWrapper>
            )
        })

        return (
            <div>
                {content}
            </div>
        )
    }
}
 
export default Cart;
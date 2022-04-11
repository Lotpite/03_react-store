import React, { Component } from 'react';
import { ItemContent, ItemWrapper, ProductImgsBlock, ProductDescriptionBlock, Slider, Change, ImgWrapper, PrevSlide, NextSlide } from '../styles/Cart.styled';
import { AttributeItem, AttributesBlock, AttributesWrapper, DescriptionSubtitle, DescriptionTitle, PriceAmount } from '../styles/ProductPage.styled';
import { Spinner } from '../styles/Spinner.styled';

class Cart extends Component {
    render() { 
        if(!this.props.productList) {
            return <Spinner />
        }

        let content = this.props.productList.map(product => {
            let mainImg = product.gallery[product.imgIndex]
            debugger
            let attributes = product.attributes.map(attribute => {
                let attributeItems = attribute.items.map(item => {

                    return (
                        <AttributeItem key={item.id} active={item.active}>
                            {item.displayValue}
                        </AttributeItem>
                    )
                })
                return (
                    <AttributesBlock key={attribute.id}>
                            <h3>{attribute.name}</h3>
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
                    <span>-------------------</span>
                 <ItemContent>
                    <ProductDescriptionBlock>
                        <DescriptionTitle>{product.name}</DescriptionTitle>
                        <DescriptionSubtitle>{product.brand}</DescriptionSubtitle>
                        {prices}
                        {attributes}
                    </ProductDescriptionBlock>
                    <ProductImgsBlock>
                        <Slider>
                            <Change>+</Change>
                            <span>{product.quantity}</span>
                            <Change>-</Change>
                        </Slider>
                        <ImgWrapper>
                            <PrevSlide>-</PrevSlide>
                            <span>
                                <img src={mainImg}></img>
                            </span>
                            <NextSlide>+</NextSlide>
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
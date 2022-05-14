import React, { Component } from 'react';

import { ProductPageWrapper, ProductImgsList, ProductMainImg, ProductDescriptionBlock, DescriptionTitle, DescriptionSubtitle, AttributesBlock, AttributeTitle, AttributesWrapper, AttributeItem, StyledButton, Description, PriceBlock, PriceTitle, PriceAmount } from '../styles/ProductPage.styled';
import { Spinner } from '../styles/Spinner.styled';

class ProductDescriptionPage extends Component {

    render() { 

        if(!this.props.product.details) {
           return <Spinner/>  
        }
        
        let imgList = this.props.product.details.gallery.map(img => {
            return (
                <span key={img}>
                    <img src={img} alt={this.props.product.details.brand} onClick={() => this.props.changeImg(img)}/>
                </span>
            )
        })

        let attributes = this.props.product.details.attributes.map(type => {
           let title = (
                <AttributeTitle key={type.id}
                    isBig={this.props.isBig}>
                    {type.name}
                </AttributeTitle>
            )       
           
           let items = type.items.map(item => {       
          
               return (
                    <AttributeItem key={item.id}
                        active={item.active} 
                        onClick={() => this.props.changeActiveAttribute(type.id, item.id)}
                        isBig={this.props.isBig}
                        color={type.name === "Color" ? item.displayValue : false}>
                        {type.name === "Color" ? '' : item.displayValue}
                    </AttributeItem>)}) 

           return (
               <AttributesBlock key={type.id}>
                   {title}
                    <AttributesWrapper>
                        {items}
                    </AttributesWrapper>
               </AttributesBlock>
           )
        })

         let price = this.props.product.details.prices.filter(item => (item.currency.label === this.props.currentCurrency.label)).map(item => {
            return (
                <PriceBlock key={item.currency.label}>
                    <PriceTitle isBig={this.props.isBig}>
                        Price
                    </PriceTitle>
                    <PriceAmount isBig={this.props.isBig}>
                        <span>{item.currency.symbol}</span>
                        <span>{item.amount}</span>
                    </PriceAmount>
                </PriceBlock>
            )
         })
         
        return ( 
            <ProductPageWrapper>
                <ProductImgsList>
                    {imgList}
                </ProductImgsList>
                <ProductMainImg>
                    <img src={this.props.product.mainImg} alt={this.props.product.details.brand} />
                </ProductMainImg>
                <ProductDescriptionBlock>
                    <DescriptionTitle isBig={this.props.isBig}>{this.props.product.details.name}</DescriptionTitle>
                    <DescriptionSubtitle isBig={this.props.isBig}>{this.props.product.details.brand}</DescriptionSubtitle>
                    {attributes}
                    {price}
                    <StyledButton onClick={() => this.props.addToCart(this.props.product.details)} disabled={this.props.product.details.inStock ? false : true}>Add to cart</StyledButton>
                    <Description > 
                        {this.props.product.details.description.replace(/<\/li>/gi, ". ").replace(/<\/?[^>]+(>|$)/gi, "")}
                    </Description>
                </ProductDescriptionBlock>
            </ProductPageWrapper>
         );
    }
}
 
export default ProductDescriptionPage;
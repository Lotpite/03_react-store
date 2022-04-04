import React, { Component } from 'react';
import { ProductPageWrapper, ProductImgsList, ProductMainImg, ProductDescriptionBlock, DescriptionTitle, DescriptionSubtitle, AttributesBlock, AttributeTitle, AttributesWrapper, AttributeItem, ActiveAttributeItem, StyledButton, Description, PriceBlock, PriceTitle, PriceAmount } from '../styles/ProductPage.styled';
import { Spinner } from '../styles/Spinner.styled';

class PDP extends Component {

    render() { 
        // check if product props are not empty
        if(!this.props.product) {
           return <Spinner/>  
        }

        //create IMG list in sidebar of PDP
        let imgList = this.props.product.gallery.map(img => {
            return (
                <span key={img}>
                    <img src={img} alt={this.props.product.brand} onClick={() => this.props.changeImg(img)}/>
                </span>
            )
        })

        // Get attributes
        let attributes = this.props.product.attributes.map(type => {
           // getType of attribute
           let title = (<AttributeTitle key={type.id}>{type.name}</AttributeTitle>)       
           
           // getAttributeItems (is not working while using in-line expression)
           let items = type.items.map(item => {       
             let NewAttributeItem = item.id === this.props.activeAttribute ? ActiveAttributeItem : AttributeItem  // active ch
               return (<NewAttributeItem key={item.id} onClick={() => this.props.changeActiveAttribute(item.id)}>{item.displayValue}</NewAttributeItem>)}) 
            // return main Attributes block
           return (
               <AttributesBlock key={type.id}>
                   {title}
                    <AttributesWrapper>
                        {items}
                    </AttributesWrapper>
               </AttributesBlock>
           )
        })

        //Get Price
         let price = this.props.product.prices.map(item => {
            if(item.currency.label === this.props.currency) {
                return (
                    <PriceBlock key={item.currency.label}>
                        <PriceTitle>
                            {item.currency.label}
                        </PriceTitle>
                        <PriceAmount>
                            <span>{item.currency.symbol}</span>
                            <span>{item.amount}</span>
                        </PriceAmount>
                    </PriceBlock>
                )
            }
         })

         // transformDescription
         let description = this.props.product.description.replace(/<\/?[a-zA-Z]+>/gi,'');


        //main return
        return ( 
            <ProductPageWrapper>
                <ProductImgsList>
                    {imgList}
                </ProductImgsList>
                <ProductMainImg>
                    <img src={this.props.mainImg} alt={this.props.product.brand} />
                </ProductMainImg>
                <ProductDescriptionBlock>
                    <DescriptionTitle>{this.props.product.name}</DescriptionTitle>
                    <DescriptionSubtitle>{this.props.product.brand}</DescriptionSubtitle>
                    {attributes}
                    {price}
                    <StyledButton>Add to cart</StyledButton>
                    <Description>
                        {description}
                    </Description>
                </ProductDescriptionBlock>
            </ProductPageWrapper>
         );
    }
}
 
export default PDP;
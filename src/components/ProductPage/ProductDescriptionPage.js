import React, { Component } from 'react';
import { ProductPageWrapper, ProductImgsList, ProductMainImg, ProductDescriptionBlock, DescriptionTitle, DescriptionSubtitle, AttributesBlock, AttributeTitle, AttributesWrapper, AttributeItem, ActiveAttributeItem, StyledButton, Description, PriceBlock, PriceTitle, PriceAmount } from '../styles/ProductPage.styled';
import { Spinner } from '../styles/Spinner.styled';

class ProductDescriptionPage extends Component {

    render() { 
        // check if product props are not empty
        if(!this.props.product.details) {
           return <Spinner/>  
        }
        //create IMG list in sidebar of ProductDescriptionPage
        let imgList = this.props.product.details.gallery.map(img => {
            // debugger
            return (
                <span key={img}>
                    <img src={img} alt={this.props.product.details.brand} onClick={() => this.props.changeImg(img)}/>
                </span>
            )
        })


        // Get attributes
        let attributes = this.props.product.details.attributes.map(type => {
           // getType of attribute
           let title = (<AttributeTitle key={type.id}>{type.name}</AttributeTitle>)       
           
           // getAttributeItems (is not working while using in-line expression)
           let items = type.items.map(item => {       
            //  let NewAttributeItem = item.id === this.props.product.activeAttribute ? ActiveAttributeItem : AttributeItem  // active ch
            //  debugger
               return (<AttributeItem key={item.id} active={item.active} onClick={() => this.props.changeActiveAttribute(type.id, item.id)}>{item.displayValue}</AttributeItem>)}) 
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
         let price = this.props.product.details.prices.map(item => {
            if(item.currency.label === this.props.currentCurrency.label) {
                return (
                    <PriceBlock key={item.currency.label}>
                        <PriceTitle>
                            Price
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
         let description = this.props.product.details.description.replace(/<\/?[a-zA-Z]+>/gi,'');
         

        //main return
        return ( 
            <ProductPageWrapper>
                <ProductImgsList>
                    {imgList}
                </ProductImgsList>
                <ProductMainImg>
                    <img src={this.props.product.mainImg} alt={this.props.product.details.brand} />
                </ProductMainImg>
                <ProductDescriptionBlock>
                    <DescriptionTitle>{this.props.product.details.name}</DescriptionTitle>
                    <DescriptionSubtitle>{this.props.product.details.brand}</DescriptionSubtitle>
                    {attributes}
                    {price}
                    <StyledButton onClick={() => this.props.addToCart(this.props.product.details)}>Add to cart</StyledButton>
                    <Description>
                        {description}
                    </Description>
                </ProductDescriptionBlock>
            </ProductPageWrapper>
         );
    }
}
 
export default ProductDescriptionPage;
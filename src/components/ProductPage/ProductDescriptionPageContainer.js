import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setProduct, setCurrency, setMainImg, changeAttributeItem } from '../../redux/product-reducer';
import { addProductToCart } from '../../redux/cart-reducer';
import ProductService from '../../services/ProductService';
import { Spinner } from '../styles/Spinner.styled';
import ProductDescriptionPage from './ProductDescriptionPage';


class ProductDescriptionPageContainer extends Component {

    NewProduct = new ProductService();

    componentDidMount() {
        
        this.getProduct()

    }
    
    getProduct = (productId = this.props.product.productId) => {
            
           this.NewProduct
            .getProductById(productId)
            .then(res => {
               this.props.setProduct(res)
               this.changeImg(res.gallery[0])
            })
        }

        changeImg = (img) => {
            this.props.setMainImg(img)
        }

        changeActiveAttributeItem = (attributeId, itemId) => {
            this.props.changeAttributeItem(attributeId, itemId);
        }

        addToCart = (productDetails) => {
            this.props.addProductToCart(productDetails)
            console.log(this.props.cart)
        }

    render() { 
        if(!this.props.product.productId) {
            return <Spinner />
        }

        return (
                <ProductDescriptionPage 
                product={this.props.product}
                currentCurrency = {this.props.currentCurrency}
                changeImg={this.changeImg}
                changeActiveAttribute={this.changeActiveAttributeItem}
                addToCart={this.addToCart}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.product,
        currentCurrency: state.currencies.activeCurrency,
        cart: state.cart
    }
}

export default connect(mapStateToProps, {
    setProduct,
    setCurrency,
    setMainImg,
    changeAttributeItem,
    addProductToCart
})
(ProductDescriptionPageContainer);

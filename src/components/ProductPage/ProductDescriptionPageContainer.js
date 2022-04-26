import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ProductDescriptionPage from './ProductDescriptionPage';

import ProductService from '../../services/ProductService';

import { setProduct, setCurrency, setMainImg, changeAttributeItem } from '../../redux/product-reducer';
import { addProductToCart } from '../../redux/cart-reducer';

import { Spinner } from '../styles/Spinner.styled';


class ProductDescriptionPageContainer extends Component {

    NewProduct = new ProductService();

    componentDidMount() {
        this.getProduct(this.props.match.params.productId)
    }
    
    getProduct = (productId) => {
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
            // console.log(productDetails)
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
                addToCart={this.addToCart}
                isBig={this.props.product.isActiveBig}/>
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

let WithRouterProductDescriptionPageContainer = withRouter(ProductDescriptionPageContainer)

export default connect(mapStateToProps, {
    setProduct,
    setCurrency,
    setMainImg,
    changeAttributeItem,
    addProductToCart
})
(WithRouterProductDescriptionPageContainer);

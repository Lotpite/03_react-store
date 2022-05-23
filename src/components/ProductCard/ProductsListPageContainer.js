import React, { Component } from 'react';

import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import { StyledCategory, H2 } from '../styles/Category.styled'
import { Spinner } from "../styles/Spinner.styled";

import { isFetching, setProducts, getProducts} from "../../redux/products-reducer";
import { setProductId } from "../../redux/product-reducer";
import { addProductToCart } from '../../redux/cart-reducer';

import ProductListPage from "./ProductsListPage";


class ProductsListPageContainer extends Component {

    componentDidMount() {
        this.props.getProducts(this.props.match.params.categoryId)
    }

    componentDidUpdate(prevProps) {

        if(this.props.match.params.categoryId !== prevProps.match.params.categoryId)
        this.props.getProducts(this.props.match.params.categoryId)
    }

    setProductId = (productId) => {
        this.props.setProductId(productId);
    }

    addToCart = (productDetails) => {
        this.props.addProductToCart(productDetails)
    }


    render() { 
        if (!this.props.products.productsList) {
            return <Spinner/>
        }


        return (
            <>  
                {/* <H2>{this.props.categories.activeCategory}</H2> */}
                {this.props.products.isFetching ? <Spinner/>: <ProductListPage
                products={this.props.products} 
                setProductId={this.setProductId}
                currentCurrency={this.props.currentCurrency}
                addToCart={this.addToCart}/>}  
            </>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories,
        currentCurrency: state.currencies.activeCurrency
    }
}

let WithRouterProductsListPageContainer = withRouter(ProductsListPageContainer)
export default connect(mapStateToProps, {
    isFetching,
    setProductId,
    setProducts,
    addProductToCart,
    getProducts
})(WithRouterProductsListPageContainer);
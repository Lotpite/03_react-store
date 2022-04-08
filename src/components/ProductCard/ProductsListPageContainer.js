import ProductListPage from "./ProductsListPage";
import React, { Component } from 'react';
import { StyledCategory, H2 } from '../styles/Category.styled'
import { Spinner } from "../styles/Spinner.styled";
import { connect } from 'react-redux';
import { isFetching } from "../../redux/products-reducer";
import { setProductId } from "../../redux/product-reducer";


class ProductsListPageContainer extends Component {

    setProductId = (productId) => {
        this.props.setProductId(productId);
    }

    render() { 
        if (!this.props.products.productsList) {
            return <Spinner/>
        }

        return (
            <StyledCategory>  
                <H2>{this.props.categories.activeCategory}</H2>
                {this.props.products.isFetching ? <Spinner/>: <ProductListPage
                products={this.props.products} 
                setProductId={this.setProductId}
                currentCurrency={this.props.currentCurrency}/>}  
            </StyledCategory>
            
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

export default connect(mapStateToProps, {
    isFetching,
    setProductId
})(ProductsListPageContainer);
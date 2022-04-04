import ProductListPage from "./ProductsListPage";
import React, { Component } from 'react';
import { StyledCategory, H2 } from '../styles/Category.styled'
import { Spinner } from "../styles/Spinner.styled";
import { connect } from 'react-redux';
import { isFetching, setProducts } from "../../redux/products-reducer";
import { Routes, Route } from "react-router-dom";


class ProductsListPageContainer extends Component {

    render() { 
        
        if (!this.props.products.productsList) {
            return <Spinner/>
        }

        return (
            <StyledCategory>  
                <H2>{this.props.categories.activeCategory}</H2>
                {this.props.products.isFetching ? <Spinner/>: <ProductListPage products={this.props.products} />}  
            </StyledCategory>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        categories: state.categories
    }
}

export default connect(mapStateToProps, {
    isFetching
})(ProductsListPageContainer);
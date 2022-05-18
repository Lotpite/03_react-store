import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navigation from "./Navigation";

import { Spinner } from "../../styles/Spinner.styled";
import { setCategories, changeActiveCategory, isFetching, getCategories } from '../../../redux/categories-reducer';
import { setProducts } from '../../../redux/products-reducer';


class NavigationContainer extends Component {

    componentDidMount() {
        this.props.getCategories()
    }
          
    onCategoryChange = (categoryId) => {
        this.props.changeActiveCategory(categoryId)
    }

    render() { 
        
        if(!this.props.categories.categoriesList) {
            return <Spinner/>
        } 

        return (
            <>
                <Navigation categories={this.props.categories} onCategoryChange={this.onCategoryChange}/>
            </>
            
        );
    }
}


const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

let withRouterNavigationContainer = withRouter(NavigationContainer)

export default connect(mapStateToProps, {
    setCategories,
    changeActiveCategory,
    isFetching,
    setProducts,
    getCategories
})(withRouterNavigationContainer);
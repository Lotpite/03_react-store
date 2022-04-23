import React, { Component } from 'react';
import ProductService from '../../../services/ProductService';
import { Spinner } from "../../styles/Spinner.styled";
import { connect } from 'react-redux';
import { setCategories, changeActiveCategory, isFetching } from '../../../redux/categories-reducer';
import { setProducts } from '../../../redux/products-reducer';
import Navigation from "./Navigation";
import { withRouter } from 'react-router-dom';


class NavigationContainer extends Component {

    ProductSerivce = new ProductService();

    componentDidMount() {
        // console.log(this.props)
        this.ProductSerivce
        .getCategoriesList()
            .then(res => {
                this.props.setCategories(res)
                // this.onCategoryChange(this.props.categories.categoriesList.find((category, i) => i === 0).name) // by default after refreshing page
            })  
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
    setProducts
})(withRouterNavigationContainer);
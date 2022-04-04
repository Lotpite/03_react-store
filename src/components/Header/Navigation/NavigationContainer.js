import React, { Component } from 'react';
import ProductService from '../../../services/ProductService'
import { Spinner } from "../../styles/Spinner.styled";
import { connect } from 'react-redux';
import { setCategories, changeActiveCategory, isFetching } from '../../../redux/categories-reducer';
import { setProducts } from '../../../redux/products-reducer';
import Navigation from "./Navigation";


class NavigationContainer extends Component {

    ProuctSerivce = new ProductService();

    componentDidMount() {

        this.ProuctSerivce
        .getCategoriesList()
            .then(res => {
                this.props.setCategories(res)
                this.onCategoryChange(this.props.categories.activeCategory)
            })  
    }
          
    onCategoryChange = (categoryId) => {
        this.ProuctSerivce
            .getProductsByCategoryName(categoryId)
                .then(res => {
                    // console.log(res)
                    this.props.changeActiveCategory(categoryId)
                    this.props.setProducts(res)
                })
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

export default connect(mapStateToProps, {
    setCategories,
    changeActiveCategory,
    isFetching,
    setProducts
})(NavigationContainer);
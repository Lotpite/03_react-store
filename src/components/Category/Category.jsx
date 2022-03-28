import ProductCard from "../ProductCard/ProductCard";
import React, { Component } from 'react';
import { StyledCategory } from '../styles/Category.styled'
import { connect } from 'react-redux';
import { toggleActiveCreator, setCategoriesCreator, setProductsCreator } from "../../redux/products-reducer";
import Header from "../Header/Header";
import {
    ApolloClient,
    InMemoryCache,
    // ApolloProvider,
    // useQuery,
    gql
  } from "@apollo/client";


class Category extends Component {
    componentDidMount() {
       
          const client = new ApolloClient({
            // uri: 'https://48p1r2roz4.sse.codesandbox.io',
            uri: 'http://localhost:4000/',
            cache: new InMemoryCache()
          });
          
          //get categoriesList
          client
            .query({
              query: gql`
              query {
                categories {
                    name
                }
              }
              `
            })
            .then(result => this.props.setCategories(result.data.categories))

            this.onCategoryChange();
    }

            client = new ApolloClient({
            // uri: 'https://48p1r2roz4.sse.codesandbox.io',
            uri: 'http://localhost:4000/',
            cache: new InMemoryCache()
          });

          getProducts =  gql`
                query getProductos($title: String!) {
                    category (input: {title: $title}) {
                        products {
                            name,
                            id
                        }
                    }
                }
            `

     onCategoryChange = (categoryId='all') => {
        this.client.query({
            query: this.getProducts,
            variables: {
                title: categoryId
            }
        })
        .then(result => this.props.setProductsCreator(categoryId, result.data.category.products))
    }



    render() { 
        let categoryName;
        this.props.state.categoriesList.forEach(category => {
            if (category.active) {
                categoryName = category.name
            }
        });

        return (
            <>
                <Header categoriesList={this.props.state} onCategoryChange={this.onCategoryChange}/>
            <StyledCategory>
                <h2>{categoryName}</h2>
                <ProductCard productsList={this.props.state.productsList}/>
            </StyledCategory>
            </>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.categoriesList
    }
}

const mapDispatchToProps = (dispatch) => {
    ;

    return {
        setCategories: (categories) => dispatch(setCategoriesCreator(categories)),
        setProductsCreator: (categoryId, products) => dispatch(setProductsCreator(categoryId, products))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Category);
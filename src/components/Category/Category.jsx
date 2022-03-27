import ProductCard from "../ProductCard/ProductCard";
import React, { Component } from 'react';
import { StyledCategory } from '../styles/Category.styled'
import { connect } from 'react-redux';
import { toggleActiveCreator, setCategoriesCreator } from "../../redux/products-reducer";
import Header from "../Header/Header";
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";


class Category extends Component {
    componentDidMount() {
       
          const client = new ApolloClient({
            // uri: 'https://48p1r2roz4.sse.codesandbox.io',
            uri: 'http://localhost:4000/',
            cache: new InMemoryCache()
          });
          
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
    }

    render() { 
        console.log(this.props)
        let categoryName;
        this.props.state.categoriesList.forEach(category => {
            if (category.active) {
                categoryName = category.name
            }
        });

        return (
            <>
                <Header categoriesList={this.props.state} onToggleActive={this.props.onToggleActive}/>
            <StyledCategory>
                <h2>{categoryName}</h2>
                <ProductCard />
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
        onToggleActive: (userId) => dispatch(toggleActiveCreator(userId)),
        setCategories: (categories) => dispatch(setCategoriesCreator(categories))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Category);
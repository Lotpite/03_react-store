import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductPage from './PDP';
import { setProduct, setCurrency, setMainImg, changeAttributeItem } from '../../redux/product-reducer';
import {
    ApolloClient,
    InMemoryCache,
    // ApolloProvider,
    // useQuery,
    gql
  } from "@apollo/client";


class PDPContainer extends Component {
    componentDidMount() {
        this.getProductById()
    }
    
        getProductByIdQuery = gql`
        query getProductById($id: String!){
            product (id: $id) {
              name,
              gallery,
              description,
              inStock,
              attributes {
                id,
                name,
                items {
                  displayValue,
                  value,
                  id
                }
              }
              prices {
                currency {
                  label,
                  symbol
                }
                  amount
              }
              brand
            }
          }
        `
         client = new ApolloClient({
            uri: 'http://localhost:4000/',
            cache: new InMemoryCache()
          });
    
        getProductById = (userId = "huarache-x-stussy-le") => {
           this.client.query({
               query: this.getProductByIdQuery,
               variables: {
                   id: userId
               }
           })
           .then(result => {
               this.props.setProduct(result.data.product)
               this.changeImg()
            })
        }

        changeImg = (img = this.props.state.product.gallery[0]) => {
            this.props.setMainImg(img)
        }

        changeActiveAttributeItem = (itemId) => {
            this.props.changeAttributeItem(itemId);
        }

    render() { 
        // console.log(this.props)

        return (
                <ProductPage 
                product={this.props.state.product} 
                currency={this.props.state.currencyLabel} 
                mainImg={this.props.state.mainImg}
                activeAttribute={this.props.state.activeAttribute}
                changeImg={this.changeImg}
                changeActiveAttribute={this.changeActiveAttributeItem}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {state: state.product}
}

export default connect(mapStateToProps, {
    setProduct,
    setCurrency,
    setMainImg,
    changeAttributeItem
})
(PDPContainer);

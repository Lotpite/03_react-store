import { Component } from 'react';
import { ApolloClient, InMemoryCache, gql} from "@apollo/client";

class ProductService extends Component {
    _endPoint = 'http://localhost:4000/'

    client = new ApolloClient({
        uri: this._endPoint,
        cache: new InMemoryCache()
    })

    getCategoriesListQuery = gql`
        query getCategoriesList{
          categories {
              name
          }
        }
    `

    getProductsByCategoryNameQuery = gql`
        query getProductsByCategoryName($title: String!) {
            category (input: {title: $title}) {
                products {
                    name,
                    id,
                    inStock,
                    gallery
                    prices {
                        currency {
                            label,
                            symbol
                        }
                        amount
                    }
                }
            }
        }
    `

    getProductByIdQuery = gql`
        query getProductById($id: String!){
            product (id: $id) {
                name,
                gallery,
                description,
                inStock,
                brand
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
            }
        }
    `

    getCurrenciesListQuery = gql`
        query getCurrenciesList {
            currencies {
                label,
                symbol
            }
        }
    `

    getResource = async (queryName, variables) => {
        let result = await this.client.query({
            query: queryName,
            variables: variables
        })
        return result;
    }

    getCategoriesList = async () => {
        const res = await this.getResource(this.getCategoriesListQuery)
        return res.data.categories;
    }

    getProductsByCategoryName = async (name) => {
        const res = await this.getResource(this.getProductsByCategoryNameQuery, {title: name})
        return res.data.category.products;
    }

    getCurrenciesList = async () => {
        const res = await this.getResource(this.getCurrenciesListQuery)
        return res.data.currencies;
    }

}
 
export default ProductService;
import ProductListPage from "./ProductsListPage";
import ProductService from '../../services/ProductService';
import React, { Component } from 'react';
import { StyledCategory, H2, Hider } from '../styles/Category.styled'
import { Spinner } from "../styles/Spinner.styled";
import { connect } from 'react-redux';
import { isFetching, setProducts} from "../../redux/products-reducer";
import { setProductId } from "../../redux/product-reducer";
import { withRouter } from "react-router-dom";


class ProductsListPageContainer extends Component {

    ProductSerivce = new ProductService();

    componentDidMount() {
        this.setProductsByCategoryId(this.props.match.params.categoryId)
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.categoryId !== prevProps.match.params.categoryId)
        this.setProductsByCategoryId(this.props.match.params.categoryId)
    }

    setProductsByCategoryId = (categoryId) => {
        this.ProductSerivce
            .getProductsByCategoryName(categoryId)
                .then(res => {
                    // console.log(res)
                    // this.props.changeActiveCategory(categoryId)
                    this.props.setProducts(res)
                })
    }

    setProductId = (productId) => {
        this.props.setProductId(productId);
    }

    render() { 
        if (!this.props.products.productsList) {
            return <Spinner/>
        }

        return (
            <StyledCategory>  
                {/* <Hider></Hider> */}
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

let WithRouterProductsListPageContainer = withRouter(ProductsListPageContainer)
export default connect(mapStateToProps, {
    isFetching,
    setProductId,
    setProducts
})(WithRouterProductsListPageContainer);
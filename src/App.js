import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import ProductsListPageContainer from './components/ProductCard/ProductsListPageContainer';
import ProductDescriptionPageContainer from './components/ProductPage/ProductDescriptionPageContainer';

class App extends Component {

  render () {
    // default Styles Reset
    const GlobalStyle = createGlobalStyle`
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
    `
    return (
      <div className="App">
        <GlobalStyle/>
        <Header />
        <Routes>
          <Route path="categories/:id" element={<ProductsListPageContainer/>}/>
          <Route path="products/:id" element={<ProductDescriptionPageContainer/>} />
        </Routes>
      </div>
    )
  }
}

export default App;

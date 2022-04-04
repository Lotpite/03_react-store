import { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import ProductsListPageContainer from './components/ProductCard/ProductsListPageContainer';

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
        <ProductsListPageContainer />
      </div>
    )
  }
}

export default App;

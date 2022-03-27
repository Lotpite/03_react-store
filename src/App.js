import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';
import Category from './components/Category/Category';

class App extends Component {

  render () {
    return (
      <div className="App">
        {/* <Header /> */}
        <Category />
      </div>
    )
  }
}

export default App;

import './App.css';
import { Component } from 'react';
import Header from './components/Header/Header';

class App extends Component {

  render () {
    return (
      <div className="App">
        <Header />
        {/* <Category /> */}
      </div>
    )
  }
}

export default App;

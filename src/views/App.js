import React, { Component } from 'react';
import Banner from './banner/Banner';
import Main from './main/Main';
import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Main />
      </div>
    );
  }
}

export default App;

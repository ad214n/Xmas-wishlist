import React, { Component } from 'react';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        < HomePage />  
        < NavBar />
        < NavBar />
      </div>
    );
  }
}

export default App;

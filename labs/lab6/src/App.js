import React, { Component } from 'react';
import './App.css';
import Person from './fetchData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Random Users
          </h1>
          <p> refresh to see new people</p>
          < Person />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import TrelloList from './TrelloList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello Youtube</h2>
        <TrelloList title='test' />
      </div>
    );
  }
}

export default App;

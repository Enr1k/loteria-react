import React, { Component } from 'react';
import Board from './Board'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/enr1k/loteria-db/posts')
      .then(response => { return response.json(); })
      .then(card => { this.setState({ cards: card }) }); // gets card from json database
  }

  render () {
    const { cards } = this.state; // So we don't type this.cards every time
    return(
      <div>
        <Board cards={cards} />
      </div>
    );
    }
  }

export default App;

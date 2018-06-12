import React, { Component } from 'react';
import ListMovies from './ListMovies';
import logo from './logo.svg';
import './App.css';

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
        <ListMovies movies={movies} />
      </div>
    );
  }
}

export default App;

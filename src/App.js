import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import NavBar from './components/navbar/navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          { routes }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import logo from './alvari.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor:'#110039'}}>
        <img src={logo} className="App-logo" alt="banner" />
        <h5>
          Cloud-based genetic crypto trading, wherever you go
        </h5>
        <h4>Coming Fall 2019</h4>
      </header>
    </div>
  );
}

export default App;

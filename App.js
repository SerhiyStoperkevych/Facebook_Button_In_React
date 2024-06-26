import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Facebook Auth Example</h1>
        <p className="App-intro">
          To get started, authenticate with Facebook.
        </p>
        <Facebook />
      </header>
    </div>
  );
}

export default App;

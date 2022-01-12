import logo from './logo.svg';
import './App.css';
import Board from './Board.jsx'
import {useImmer} from "use-immer";
import Square from "./Square";
import {useState} from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Board/>
        <br />
        <br />


        created by Aditya Saurabh and asb
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

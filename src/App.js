import React from 'react';
import './App.css';
import Game from './Game';
import {useSelector, useDispatch} from 'react-redux';
import { fillSquares } from './action';

function App() {

  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;

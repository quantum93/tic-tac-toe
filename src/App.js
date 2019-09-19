import React from 'react';
import './App.css';
import Game from './Game';
import {useSelector, useDispatch} from 'react-redux';
import { fillSquares } from './action';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return state
}
function App() {

  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default connect(mapStateToProps)(App);

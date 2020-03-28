import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux'

import Welcome from './components/Welcome';
import Question from './components/Question';
import Sean from './components/Sean';

import ACTIONS from "./actions";

import { WELCOME } from "./consts";

import * as selectors from "./selectors";

function App() {
  const dispatch = useDispatch();

  const onScreen = useSelector(selectors.getOnScreen);

  const MainContent = (onScreen === WELCOME) ? <Welcome /> : <Question />;

  return (
    <div className="App">
      <section className="App-body">
        <div>
          <span role="img" aria-label="waving hand">👋</span>&nbsp;Code Quality POC
        </div>
        {MainContent}
        <div>
          <button onClick={() => dispatch({ type: ACTIONS.Types.START_GAME })}>
            Start Game
          </button>
        </div>
        <Sean />
        <div className="App-secondary">Code repository</div>
      </section>
    </div>
  );
}

export default App;

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

  const question = useSelector(selectors.getNextQuestion);
  const questionId = useSelector(selectors.getNextQuestionId);
  const seansMood = useSelector(selectors.getSeansMood);
  const gameState = useSelector(selectors.getGameState);

  const displays = {
    WELCOME: <Welcome handler={() => dispatch({ type: ACTIONS.Types.START_GAME })} />,
    QUESTIONS: <Question handler={(value) => dispatch({ type: ACTIONS.Types.SELECT_ANSWER, data: { questionId, moodEffect: value } })} question={question} />,
    GOODBYE: <h1>Bye</h1>,
  };

  return (
    <div className="App App-body">
      <header>
        <span role="img" aria-label="waving hand">👋</span>&nbsp;Code Quality POC
        </header>
      {displays[gameState]}
      <Sean mood={seansMood} />
      <footer className="App-secondary">Code repository</footer>
    </div>
  );
}

export default App;

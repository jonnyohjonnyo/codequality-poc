import React from 'react';
import './App.css';

import { useDispatch, useSelector } from 'react-redux'

import Welcome from './components/Welcome';
import Question from './components/Question';
import Sean from './components/Sean';

import ACTIONS from "./actions";

import * as selectors from "./selectors";

function App() {
  const dispatch = useDispatch();

  const question = useSelector(selectors.getNextQuestion);
  const questionId = useSelector(selectors.getNextQuestionId);
  const seansMood = useSelector(selectors.getSeansMood);
  const gameState = useSelector(selectors.getGameState);
  const lastAnswer = useSelector(selectors.getHowTheLastQuestionAffectedSeansMood);

  const displays = {
    WELCOME: <Welcome handler={() => dispatch({ type: ACTIONS.Types.START_GAME })} />,
    QUESTIONS: <Question lastAnswer={lastAnswer} handler={(value) => dispatch({ type: ACTIONS.Types.SELECT_ANSWER, data: { questionId, moodEffect: value } })} question={question} />,
    GOODBYE: <h1>That's all the questions we have. Please refresh to play again.</h1>,
    WINNER: <h1>Congratulations, you've made Sean happy!</h1>,
    LOSER: <h1>You've made Sean very unhappy. Please refresh to play again.</h1>,
  };

  return (
    <div className="App App-body">
      {displays[gameState]}
      <Sean mood={seansMood} />
      <footer className="App-secondary">
        <p><a href="https://github.com/jonnyohjonnyo/codequality-poc">Code repository</a></p>
        <p className="fine-print">
          Fine print: Images and names used in this application are fictional and for entertainment purposes only. The real Sean is not affiliated with nor did dhe give permission for this application to be developed. Any resemblance to the real Sean is purely accidental. Please consider signing the change.org petition to prevent the author of this web application from perpetuating silliness like this on the public internet. Approximate time taken to develop this app: 4 hours, including at least 1 hour horizontally centering things.
        </p>
      </footer>
    </div>
  );
}

export default App;

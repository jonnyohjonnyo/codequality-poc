import React from 'react';
import './App.css';

import ACTIONS from "./actions";
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <section className="App-body">
        <div>
          <span role="img" aria-label="waving hand">👋</span>&nbsp;Code Quality POC
        </div>
        <div>
          <button onClick={() => dispatch({ type: ACTIONS.Types.SELECT_ANSWER })}>
            Increment counter
      </button>
        </div>
        <div className="App-secondary">Code repository</div>
      </section>
    </div>
  );
}

export default App;

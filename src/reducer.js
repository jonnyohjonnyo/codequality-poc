import ACTIONS from "./actions";

import { questions, WELCOME } from "./consts.js";

const defaultState = {
    questions,
    seansMood: 0,
    onScreen: WELCOME,
};

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.START_GAME: {
            return {
                ...state,
                onScreen: 'QUESTION_1',
            };
        }
        default:
            return state;
    }
};

export default todoReducer;
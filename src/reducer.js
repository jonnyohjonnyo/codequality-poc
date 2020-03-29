import ACTIONS from "./actions";

import { questions, WELCOME } from "./consts.js";

const generateQuestionOrder = () => {
    const questionOrder = [];
    for (let i = 0; i < questions.length; i++) {
        questionOrder.push(i);
    }
    return questionOrder;
}

const defaultState = {
    questions,
    questionsToBeAsked: generateQuestionOrder(),
    seansMood: 0,
    onScreen: WELCOME,
};

const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ACTIONS.Types.START_GAME: {
            return {
                ...state,
                onScreen: null,
            };
        }
        case ACTIONS.Types.SELECT_ANSWER: {
            return {
                ...state,
                questionsToBeAsked: state.questionsToBeAsked.slice(0, -1),
            };
        }
        default:
            return state;
    }
};

export default todoReducer;
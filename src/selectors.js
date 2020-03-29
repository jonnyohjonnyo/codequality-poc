import _ from 'lodash';

import { WELCOME, QUESTIONS, GOODBYE } from './consts';

export const getOnScreen = (state => state.onScreen);

export const getSeansMood = (state => state.seansMood);

export const getNextQuestionId = state => _.last(state.questionsToBeAsked);

export const getNextQuestion = (state => {
    const nextQuestion = getNextQuestionId(state);
    return state.questions[nextQuestion];
});

export const getGameState = (state => {
    if (state.onScreen === WELCOME) {
        return WELCOME;
    }
    if (state.questionsToBeAsked.length === 0) {
        return GOODBYE;
    }
    return QUESTIONS;
});

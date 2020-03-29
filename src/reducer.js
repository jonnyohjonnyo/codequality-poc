import _ from 'lodash';

import ACTIONS from "./actions";

import { questions, WELCOME } from "./constants";

const generateQuestions = () => {
    const freshQuestionSet = _.cloneDeep(questions);
    _.forEach(freshQuestionSet, question => {
        // shuffle answers in fun(ny) way
        const newAnswers = [];
        while (question.answers.length > 0) {
            const answerToShuffle = question.answers.pop();
            const coinFlip = _.random(2);
            if (coinFlip === 0) {
                newAnswers.unshift(answerToShuffle);
            } else {
                newAnswers.push(answerToShuffle);
            }
        }
        question.answers = newAnswers;
    });
    return freshQuestionSet;
}

const generateQuestionOrder = () => {
    const allQuestions = [];
    const questionOrder = [];
    for (let i = 0; i < questions.length; i++) {
        allQuestions.push(i);
    }
    for (let i = 0; i < questions.length; i++) {
        const nextQuestion = _.sample(allQuestions);
        _.pull(allQuestions, nextQuestion);
        questionOrder.push(nextQuestion);
    }
    return questionOrder;
}

const defaultState = {
    questions: generateQuestions(),
    questionsToBeAsked: generateQuestionOrder(),
    answers: [],
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
                seansMood: state.seansMood + action.data.moodEffect,
                answers: [...state.answers, action.data.moodEffect],
            };
        }
        default:
            return state;
    }
};

export default todoReducer;
import React from 'react';

const seansResponses = {
    [-1]: "Sean isn't feeling so well after your last answer.",
    0: 'Sean is nonplussed by your last answer.',
    1: "You're making Sean happier!",
};

const Component = ({ question, handler, lastAnswer }) => {
    const { answers } = question;
    const buttons = [];
    answers.forEach((answer) => {
        buttons.push(<button onClick={handler.bind(this, answer.seansMoodChangesBy)} key={answer.text}>{answer.text}</button>)
    });
    return (
        <main>
            <div>{seansResponses[lastAnswer]}</div>
            <div>{question.text}</div>
            {buttons}
        </main>
    );
}
export default Component;

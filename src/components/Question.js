import React from 'react';

const Component = ({ question, handler }) => {
    const { answers } = question;
    const buttons = [];
    answers.forEach((answer) => {
        buttons.push(<button onClick={handler.bind(this, answer.seansMoodChangesBy)} key={answer.text}>{answer.text}</button>)
    });
    return (
        <main>
            <div>{question.text}</div>
            {buttons}
        </main>
    );
}
export default Component;

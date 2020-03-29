import React from 'react';

const Component = ({ handler }) => (
    <main>
        Welcome to Make Sean Happy, the text adventure game where your answers can make Sean happier, or sadder. Ready to play?
        <div className="start"><button onClick={handler}>
            Start Game
        </button>
        </div>
    </main>
);

export default Component;

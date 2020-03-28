const Types = {
    SELECT_ANSWER: "SELECT_ANSWER",
    START_GAME: "START_GAME",
};
// actions
const selectAnswer = answer => ({
    type: Types.SELECT_ANSWER,
    data: { answer, }
});

export default {
    selectAnswer,
    Types
};
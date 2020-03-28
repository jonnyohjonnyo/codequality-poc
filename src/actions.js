const Types = {
    SELECT_ANSWER: "SELECT_ANSWER"
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
export default {
    questions: state => {
        return state.questions;
    },
    currentQuestion: state => {
        return state.currentQuesction;
    },
    lastQuestion: state => {
        return state.questions[0]
    },
    firstQuestion: state => {
        return state.questions[state.questions.length - 1]
    }
};
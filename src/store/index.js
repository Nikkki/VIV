import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
// import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    mutations,
    getters,
    state: {
        questions: [
            {
                numb: 13,
                question: 'Что такое грех?',
                answer: 'Грех — это любой недостаток послушания закону Божию или нарушение его(1).',
                sups: {
                    1: [{ text: '1 Ин. 3:4', link: 'https://allbible.info/bible/sinodal/1jo/3#4' }]
                }
            },
            {
                numb: 14,
                question: 'Что являлось грехом, из-за которого наши прародители пали из ' +
                    ' того состояния, в котором они были созданы?',
                answer: 'Грех, из-за которого наши прародители пали из состояния, ' +
                    ' в котором они были созданы, заключался в том, что они вкусили запретных плодов1.',
                sups: {
                    1: [{ text: 'Быт. 3:6,12', link: 'http://allbible.info/bible/sinodal/ge/3#6' }]
                }
            }
        ],
        currentQuestion: 1
    }


});
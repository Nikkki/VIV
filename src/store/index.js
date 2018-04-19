import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import {
  questionsJSON
} from './questions.js';

let questions = questionsJSON;

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  getters,
  state: {
    questions,
    currentQuestion: 1
  }


});

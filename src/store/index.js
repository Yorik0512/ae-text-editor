import Vue from "vue";
import Vuex from "vuex";
import * as mutations from './mutations'
import * as getters from './getters'
import * as actions from './actions'

// Set Vuex.
Vue.use(Vuex);

// Store state.
const state = {
  wordsData: [],
  selectedWord: {},
  synonymDialog: {
    dialogVisible: false,
    dialogSynonym: {},
    wordData: {}
  }
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

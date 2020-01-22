import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    highlights: [],
  },
  mutations: {
    updateHighlights(state, payload) {
      state.highlights = payload;
    },
  },
  actions: {
    async refreshHighlights(context) {
      const response = await axios.get('http://localhost:3000/highlights');
      context.commit('updateHighlights', response.data);
    },
  },
  modules: {
  },
});

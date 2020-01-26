import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    highlights: [],
    createTags: ['Hello', 'World'],
  },
  mutations: {
    updateHighlights(state, payload) {
      state.highlights = payload;
    },
    updateCreateTags(state, payload) {
      state.createTags = payload;
    },
  },
  actions: {
    async refreshHighlights(context) {
      const response = await axios.get('http://localhost:3000/highlights');
      context.commit('updateHighlights', response.data);
    },
    addCreateTag(context, newTag) {
      const tags = this.state.createTags.slice();
      tags.push(newTag);
      context.commit('updateCreateTags', tags);
    },
  },
  modules: {
  },
});

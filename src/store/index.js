import { createStore } from 'vuex'

export default createStore({
  state: {
    sort: 'top_rated',
    list: [],
  },
  getters: {
    getSort: state => state.sort,
  },
  mutations: {
    setSort(state, sort) {
      state.sort = sort;
    }
  },
  actions: {
    setSort({ commit }, sort) {
      commit('setSort', sort);
    }
  },
})

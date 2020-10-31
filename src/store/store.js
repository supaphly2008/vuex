import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    total: 0
  },
  mutations: {
    addToCart(state, item) {
      state.count += 1;
      state.total += item.price;
    }
    // increment(state, payload) {
    //   state.count += payload;
    // }
  },
  actions: {
    addToCart({ commit }, item) {
      commit("addToCart", item);
    }
    // increment({ commit }, payload) {
    //   commit("increment", payload);
    // }
  },
  getters: {
    getCart(state) {
      return { ...state };
    }
    // getCount(state) {
    //   return state.count;
    // }
  }
});

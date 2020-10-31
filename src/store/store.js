import Vue from "vue";
import Vuex from "vuex";
import { ADD_TO_CART, REMOVE_CART } from "./mutaion-types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    total: 0
  },
  mutations: {
    [ADD_TO_CART](state, item) {
      state.count += 1;
      state.total += item.price;
    },
    [REMOVE_CART](state) {
      state.count = 0;
      state.total = 0;
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit(ADD_TO_CART, item);
    },
    removeCart({ commit }) {
      commit(REMOVE_CART);
    }
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

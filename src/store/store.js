import Vue from "vue";
import Vuex from "vuex";
import { ADD_TO_CART } from "./mutaion-types";

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
    }
  },
  actions: {
    addToCart({ commit }, item) {
      commit(ADD_TO_CART, item);
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

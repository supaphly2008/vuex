import Vue from "vue";
import Vuex from "vuex";
import { HTTP } from "../http-common";
import { ADD_TO_CART, REMOVE_CART, GET_ALL_PRODUCTS, ALL_PRODUCTS } from "./mutaion-types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    count: 0,
    total: 0,
    products: [],
    showLoader: false,
  },
  mutations: {
    [ADD_TO_CART](state, item) {
      state.count += 1;
      state.total += item.price;
    },
    [REMOVE_CART](state) {
      state.count = 0;
      state.total = 0;
    },
    [ALL_PRODUCTS](state) {
      state.showLoader = true;
    },
    [GET_ALL_PRODUCTS](state, products) {
      state.products = products;
      state.showLoader = false;
    },
  },
  actions: {
    addToCart({ commit }, item) {
      commit(ADD_TO_CART, item);
    },
    removeCart({ commit }) {
      commit(REMOVE_CART);
    },
    getAllProducts({ commit }) {
      commit(ALL_PRODUCTS);
      HTTP.get("products").then((res) => {
        commit(GET_ALL_PRODUCTS, res.data);
      });
    },
  },
  getters: {
    isLoading(state) {
      return state.showLoader;
    },
    getCart(state) {
      const { total, count } = state;
      return { total, count };
    },
    getAllProducts(state) {
      return state.products;
    },
  },
});

import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Todo } from "./todo";

Vue.use(Vuex);

interface State {
  todoList: readonly Todo[];
}

const store: StoreOptions<State> = {
  state: {
    todoList: [],
  },
  getters: {
    todoList: (state) => state.todoList,
  },
  mutations: {
    addNewTodo(state, payload) {
      state.todoList = [...state.todoList, payload];
    },
  },
  actions: {
    addNewTodo({ commit }, payload) {
      commit("addNewTodo", payload);
    },
  },
  modules: {},
};

export default new Vuex.Store<State>(store);

import { TaskStatus } from "@/types";
import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { Todo } from "./todo";

Vue.use(Vuex);

interface State {
  todoList: readonly Todo[];
  todoListFiltered: readonly Todo[];
}

const store: StoreOptions<State> = {
  state: {
    todoList: [],
    todoListFiltered: [],
  },
  getters: {
    todoList: (state) => state.todoList,
    todoListFiltered: (state) => state.todoListFiltered,
  },
  mutations: {
    addNewTodo(state, payload) {
      state.todoList = [...state.todoList, payload];
      state.todoListFiltered = [...state.todoListFiltered, payload];
    },
    filterTodoListBy(state, payload) {
      if (payload === TaskStatus.All) {
        state.todoListFiltered = state.todoList;
        return;
      }
      state.todoListFiltered = state.todoList.filter(
        (item) => item.status === payload
      );
    },
  },
  actions: {
    addNewTodo({ commit }, payload) {
      commit("addNewTodo", payload);
    },
    filterTodoListBy({ commit }, payload) {
      commit("filterTodoListBy", payload);
    },
  },
  modules: {},
};

export default new Vuex.Store<State>(store);

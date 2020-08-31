import {REMOVED_TODO, SET_TODO, SET_TODOS} from "@/store/todolist/types";

export const mutations = {
  [SET_TODO]: (state, todo) => {
    state.todolist.push(todo);
  },

  [SET_TODOS]: (state, todos) => {
    state.todolist = todos;
  },

  [REMOVED_TODO]: (state, id) => {
    state.todolist = state.todolist.filter(e => e.id !== id)
  }
}
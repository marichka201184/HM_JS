import {ADD_TODO, GET_TODOS, REMOVE_TODO, REMOVED_TODO, SET_TODO, SET_TODOS} from "@/store/todolist/types";

import Vue from 'vue';

export const actions = {
  [ADD_TODO]: async ({commit}, todo) => {
    try {
      const {body: {name}} = await Vue.http.post('https://myhm-fcbd9.firebaseio.com/todo.json', todo);
      const todolist = {...todo, id: name};
      commit(SET_TODO, todolist);
    } catch (e) {
      console.log(e);
    }
  },

  [GET_TODOS]: async ({commit}) => {
    try {
      const todos = [];
      const {body} = await Vue.http.get('https://myhm-fcbd9.firebaseio.com/todo.json');
      for (let item in body) {
        todos.push({...body[item], id: item})
        console.log(todos)
      }
      commit(SET_TODOS, todos);
      console.log(todos,'GET')
    } catch (e) {
      console.log(e);
    }
  },

  [REMOVE_TODO]: async ({commit}, id) => {
    try {
      await Vue.http.delete(`https://myhm-fcbd9.firebaseio.com/todo/${id}.json`);
      commit(REMOVED_TODO, id)
    } catch (e) {
      console.log(e);
    }
  }

}


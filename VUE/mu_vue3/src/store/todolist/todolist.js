import {state} from "@/store/todolist/state";
import {actions} from "@/store/todolist/actions";
import {getters} from "@/store/todolist/getters";
import {mutations} from "@/store/todolist/mutations";

const namespaced = true;

export const todoListModule = 'todolist';

export const todolist = {
  namespaced,
  state,
  actions,
  getters,
  mutations,
}
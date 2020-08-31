import {TODOS} from "@/store/todolist/types";

export const getters = {
  [TODOS]: state => {
    return state.todolist
  }
}
<template>
  <div>
    <input type="text" v-model="text">
    <button @click="add">Add Todo</button>
    <ul>
      <li v-for="(item, i) in todolist" :key="i">
        <Todo :item="item"/>
      </li>
    </ul>
  </div>
</template>

<script>
import {createNamespacedHelpers} from "vuex";
import {todoListModule} from "@/store/todolist/todolist";
import {ADD_TODO} from "@/store/todolist/types";
import {TODOS} from "@/store/todolist/types";
import Todo from "@/components/Todo";


const {mapActions} = createNamespacedHelpers(todoListModule);
const {mapGetters} = createNamespacedHelpers(todoListModule);
export default {
  name: 'Todolist',

   components: {
    Todo
  },
  computed:{
    ...mapGetters({
      todolist: TODOS
    })
  },

  data() {
    return {
      text: ''
    }
  },

  methods: {
    ...mapActions({
      addTodo: ADD_TODO
    },
       ),

        async add() {
      try {
        const todo = {
          text: this.text
        
        }
        await this.addTodo(todo);
        // console.log(obj);
        this.text = '';
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>
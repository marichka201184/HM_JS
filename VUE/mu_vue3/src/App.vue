<template>
  <div>
    <h1>My own list</h1>
    <Todolist/>
    <hr>
    <!-- <Todo/> -->
  </div>
</template>

<script>

//import Todo from "@/components/Todo";
import Todolist from "@/components/Todolist";
import {todoListModule} from "@/store/todolist/todolist";
import {GET_TODOS} from "@/store/todolist/types";

export default {
  name: 'App',

  components: {
   // Todo,
    Todolist
  },

  async beforeMount() {
    try {
      await this.$store.dispatch(`${todoListModule}/${GET_TODOS}`);
      //console.log(a)
    } catch (e) {
      console.log(e);
    }
  }
}
</script>

<style>
</style>
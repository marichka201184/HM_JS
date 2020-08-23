<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" class="marg" v-model="newDo">
    <button v-if="show" v-on:click="Add">Add new todo</button>
    <ul>
     <li v-for="(todo, i) in todo" :key="i">
        <Todo
    :todo='todo'    
    @deleteDo="deleteDo"
    />               
     </li>
    </ul>    
      </div>
 
</template>

<script>
import Todo from "@/components/Todo";

export default {
  name: 'TodoList',
    components: {
    Todo
  },


  props: {
    todo: {
      type: Array,
      required: true
    }
  },

 

  data() {
    return {
      title: 'Todo list',
      show: true,
      newDo:'',
     
     
    }
  
  },
  methods: {
    Add() {
    
        this.todo.push(this.newDo)
        this.newDo=''
        this.todo.length >9 ? this.show=false :true;
        console.log(this.show)
        console.log( this.todo.length )
    },
    deleteDo(event) {
      console.log(event);
      this.todo.splice(this.todo.indexOf(event), 1)
      this.show=true;
    },
  }
}
</script>

<style scoped>
.marg {
    margin: 10px;
}
</style>
<template>
  <div>
   <input type="text" class="marg" v-model="newDo">
    <button v-if="show" v-on:click="addDo">Add new todo</button>
     <ul>
     <li v-for="(todo, index) in todo" :key="index">
        {{ todo }} 
        <button v-on:click="deleteDo" >Delete</button>
     </li>
    </ul> 
  </div>

</template>

<script>

export default {
  name: 'App',
    data() {
    return {
      show: true,
      todo: ['Go to the store', 'Go for a walk', 'Make a coffee'],
      newDo:'',
      i:0
    }
  },
      methods: {
      addDo() {
       
        this.todo.push(this.newDo)
        this.newDo=''
        this.todo.length >9 ? this.show=false :true;
      },
      deleteDo() {
        this.todo.splice(this.i, 1);
        //this.todo.length >9 ? this.show=false :true;

      },
      
      },
      

}
</script>

<style>
.marg {
    margin: 10px;
}
</style>

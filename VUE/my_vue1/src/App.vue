<template>
 <div>
   <h1>Your scheduler</h1>
     <TodoList :todo='todo'  
               
                />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: 'App',
  components: {
    TodoList
  },
  data() {
    return {
      todo: ['Go to the store', 'Go for a walk', 'Make a coffee']

    }
  }
}
</script>

<style>

</style>

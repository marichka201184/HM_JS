<template>
  <div> 
           {{ todo }} 
        <button @click="deleteDo" >Delete</button>
    
      </div>
 
</template>

<script>

export default {
  name: 'Todo',
    
  props: {
    todo: {
      type: String,
      required: true
    },
    
      },
     
  methods: {
    
    deleteDo() {
       
        this.$emit('deleteDo',this.todo);
           
      },
           },      
  }

</script>

<style >

</style>
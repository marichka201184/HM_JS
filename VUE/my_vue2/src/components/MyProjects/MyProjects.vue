<template>
 <div>
   <h1>SUMMARY OF WORK EXPERIENCE</h1>
    <input type="text" class="marg" v-model="todo.job">
    <button  @click="Add">Add new job</button>
    <button  v-on:click="Update">Reload</button>
    <ul>
     <li v-for="(jobs, i) in this.jobs" :key="i">
       {{jobs.value.job}} 
      <button @click="deleteDo(jobs.id)" >Delete</button>          
     </li>
    </ul>    
       
 </div>
</template>

<script>

export default {
  name: 'MyProjects',

  beforeMount() {
       this.$http.get('https://myhm-fcbd9.firebaseio.com/todo.json')
      .then((res) => {       
        return res.json()
      }).then((res) => {  
            Object.entries(res).forEach(entry => {
            const [key, value] = entry;
            this.jobs.push({id:key,value})
  
  console.log(key, value);
})
     
      })
    }  ,   
        
   data() {
    return {
      todo: {
          job: ''},
       
      jobs:[],

    }
  },
   methods: {

    

    Add() {
    
        this.$http.post(`https://myhm-fcbd9.firebaseio.com/todo.json`, this.todo)
          ;       
           this.jobs=[];
       this.$http.get('https://myhm-fcbd9.firebaseio.com/todo.json')
      .then((res) => {       
        return res.json()
      }).then((res) => {  
            Object.entries(res).forEach(entry => {
            const [key, value] = entry;
            this.jobs.push({id:key,value})
  
  console.log(key, value);
})
     
      })     
    },
       
    deleteDo(event) {
       this.$http.delete(`https://myhm-fcbd9.firebaseio.com/todo/${event}.json`)
              },

    Update() {
      this.jobs=[];
       this.$http.get('https://myhm-fcbd9.firebaseio.com/todo.json')
      .then((res) => {       
        return res.json()
      }).then((res) => {  
            Object.entries(res).forEach(entry => {
            const [key, value] = entry;
            this.jobs.push({id:key,value})
  
  console.log(key, value);
})
     
      })
    }

  }

}
</script>

<style>

</style>

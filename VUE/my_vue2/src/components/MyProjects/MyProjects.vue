<template>
 <div>
   <h1>SUMMARY OF WORK EXPERIENCE</h1>
    <input type="text" class="marg" v-model="todo.job">
    <button  v-on:click="Add">Add new job</button>
    <button  v-on:click="Update">Reload</button>
    <ul>
     <li v-for="(jobs, i) in this.jobs" :key="i">
       {{jobs.job}}  
       <button @click="deleteDo" >Delete</button>          
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
        console.log(res, 'RESPONSE');
        return res.json()
      }).then((res) => {
        console.log(res, 'JSON');
        Object.values(res).forEach(u => this.jobs.push(u));
        console.log(this.jobs)
        
      })
      
    },

 
  data() {
    return {
      todo: {
          id:'',
          job: ''},
       
      jobs:[],

    }
  },
   methods: {

    

    Add() {
    
        this.$http.post(`https://myhm-fcbd9.firebaseio.com/todo.json`, this.todo)
          .then((res) => {
            console.log(res);
            console.log(this.todo)
            console.log(this.jobs)
          });
       
    },
    deleteDo() {
    
       this.$http.delete(`https://myhm-fcbd9.firebaseio.com/todo.json`)
      .then((res) => {
        console.log(res, 'DELETE');
      });
     
    },

    Update() {
       this.jobs=[];         
       this.$http.get('https://myhm-fcbd9.firebaseio.com/todo.json')
      .then((res) => {
        console.log(res, 'RESPONSE');
        return res.json()
      }).then((res) => {
        console.log(res, 'JSON');
        Object.values(res).forEach(u => this.jobs.push(u));
        console.log(this.jobs)
      })
    }

  }

}
</script>

<style>

</style>

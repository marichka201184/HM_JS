<template>
   <div>
     <h1>My CV</h1>
     <Header/>  
    <router-view/>
  </div>
</template>

<script>

import Header from "@/components/Header"; 
export default {
  name: 'App',
   components: {
    Header
  }
}
</script>

<style>

</style>

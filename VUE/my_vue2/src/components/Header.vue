<template>
  <ul class="nav nav-pills">
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        to="Home"
        exact
        tag="li"
    >
      Home
    </router-link>
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        to="/Contacts"
        exact
        tag="li"
    >
      Contacts
    </router-link>
<!--    Потрібно прописати оригінальний шлях to-->
    <router-link
        class="nav-link"
        active-class="active"
        style="cursor: pointer"
        to="/MyProjects"
        tag="li"
    >
      My projects
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.my-active {
  background-color: green;
}
</style>





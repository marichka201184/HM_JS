<template>
  <div>
    <div>
      <p>{{item.text}} <button @click="remove">Delete</button></p>
    </div>
  </div>
</template>

<script>
import {todoListModule} from "@/store/todolist/todolist";
import {createNamespacedHelpers} from "vuex";
import {REMOVE_TODO} from "@/store/todolist/types";

const {mapActions} = createNamespacedHelpers(todoListModule);
export default {
  name: 'Todo',

  props: {
    item: {
      type: Object
    }
  },

  methods: {
    ...mapActions({
      removeTodo: REMOVE_TODO
    }),

    async remove() {
      // console.log(this.item.id);
      try {
        await this.removeTodo(this.item.id)
      } catch (e) {
        console.log(e);
      }
    }
  },

  beforeMount() {
    // console.log(this.item)
  }
}
</script>
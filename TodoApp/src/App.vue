<script >
import Todos from './components/Todos.vue'

export default{
  name:'app',
  components:{
    Todos
  },
  data(){
    return {
      todos: [
        {
          id:1,
          name: "ES6 Classes",
          status: false
        },
        {
          id:2,
          name: "Node Classes",
          status: false
        },
        {
          id:3,
          name: "TypeScript Classes",
          status: false
        },
        {
          id:4,
          name: "Vue Classes",
          status: false
        }
      ]
    }
  }
}
</script>

<template>
  <div id="app">
    <!--Child Component Todo is binded with the data in App Component-->
    <Todos v-bind:todos="todos"/>
  </div>
</template>

<style>

</style>

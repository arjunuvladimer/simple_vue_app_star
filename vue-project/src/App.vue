<script>
  export default {
    // OPTIONS API 
    // localhost:5000/data => req.body => {count:0, fname:"Arjun"}
    // localhost:5000/methods
// Data
// Set Global Variables
// this.count = 0
// this.fname = "Arjun"
    data(){
      return {
        count: 0,
        fname:"Arjun"
      }
    },
// Methods
    methods:{
      increment(){
        this.count++
      }
    },

// Component API Life Cycle Hooks
// Mounted
  mounted(){
    console.log(`The initial count is ${this.count}`)
  }

}
</script>

<template>
  <h1>First Web  Component</h1>
  <button @click="increment">Count is: {{count}}</button>
  <p>{{fname}}</p>
</template>

<style>
h1{
  color:aqua
}
</style>

<script>
export default{
    name:'Todo',
    props:[
        "todo"
    ]
}
</script>

<template>
    <div>
        <p>{{todo.name}}</p>
        <p>{{todo.status}}</p>
    </div>
</template>

<style>
</style>
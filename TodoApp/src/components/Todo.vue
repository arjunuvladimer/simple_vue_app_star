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
        <p>{{todo.title}}</p>
        <p>{{todo.description}}</p>
        <p>{{todo.status}}</p>
    </div>
</template>

<style>
</style>
<template>
    <div v-for="(data, i) in blog" :key="i">
    <h5>{{ data.title }}</h5>
    <p>{{ data.date }}</p>
    <p>{{ data.content }}</p>
    <p>{{ data.number }}</p>

    </div>

  
</template>

<script>
export default {
    name : 'list',
    props : {
        blog : Array,
    },
}
</script>

<style>

</style>
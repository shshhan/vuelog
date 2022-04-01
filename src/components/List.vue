<template>
    <div v-for="(data, i) in blog" :key="i">
        <h5 @click="$router.push('/detail/'+i)">{{ data.title }}</h5>
        <p>{{ data.date }}</p>
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
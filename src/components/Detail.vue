<template>
  <h4>{{ blog[$route.params.id].title }}</h4>
  <p>{{ blog[$route.params.id].content }}</p>
  <p @click="moveToAuthor">작가보기</p>
  <div class="mt-4 mb-4">
    <router-view :blogData="blog[$route.params.id]"></router-view>
  </div>
  <p @click="$router.go(-1)">뒤로가기</p>
</template>

<script>
export default {
    name : 'Detail',
    data (){
        return {
            curUrl : "",
        }
    },
    methods : {
        moveToAuthor(){
            location.href = window.location.href + '/author';
        },
    },
    props : {
        blog : Array,
    }


}
</script>

<style>

</style>
<template>
    <div>   
      <h5>"{{blogData.title}}"의 제작자 "{{ blogData.author }}"</h5>
      <p>{{blogData.authorContent}}</p>
      <button type="button" class="btn btn-secondary" @click="$router.go(-1)">작가 소개 닫기</button>
    </div>
</template>

<script>
export default {
    name : 'Author',
    props : {
        blogData : Object,
    },
    methods : {
      moveBackToDetail(){

      }
    },
}
</script>

<style>

</style>
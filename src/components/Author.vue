<template>
  <h5>{{ blog }}의 작가 소개 페이지</h5>
  <p>작가소개</p>
</template>

<script>
export default {
    name : 'Author',
    props : {
        blogData : Object,
    }

}
</script>

<style>

</style>
<template>
  <h4>{{ blog[$route.params.id].title }}</h4>
  <p>{{ blog[$route.params.id].content }}</p>

 <!-- 아래 두 코드 모두 정상적으로 작동
 함수를 호출해서 location.href로 보내는 것과 router.push를 사용하는 것에 차이가 있을까?
 
 차이점 발견 : location.href를 사용하면 말 그대로 새롭게 새로운 경로로 요청을 보내는 것, router.push는 새로운 네트워크 호춡X.
 이런 표현이 맞는지 모르겠지만 router.push가 더욱 SPA 스럽다고 볼 수 있겠다. -->
      
  <button type="button" class="btn btn-primary" @click="moveToAuthor()">제작자 보기 1</button>
  <button type="button" class="btn btn-primary" @click="$router.push('/detail/'+$route.params.id+'/author')">제작자 보기 2</button>

  <div class="mt-4 mb-4">
    <router-view :blogData="blog[$route.params.id]"></router-view>
  </div>

  <button type="button" class="btn btn-secondary" @click="$router.push('/list')">뒤로가기</button>
</template>

<script>
export default {
    name : 'Detail',
    data (){
        return {
            curUrl : window.location.href,
        }
    },
    methods : {
        moveToAuthor(){
            const url = window.location.href;

            if(!url.includes("author")){
                // $router.push(url + '/author');   script 태그 내부에서는 $router is not defined
                location.href = url + '/author';
            }
        },
    },
    props : {
        blog : Array,
    }
}
</script>

<style>

</style>
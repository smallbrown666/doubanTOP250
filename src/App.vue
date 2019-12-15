<template>
  <div id="app">
    <home-title :title="title" v-if="show"></home-title>
    <!-- <home-content></home-content> -->
    <router-view></router-view>
  </div>
</template>

<script>
//1.引入组件  @表示当前录下 
//2.在components 文件下 创建 对应的组件 大驼峰命名
//3.在跟标签中 插入 html标签
import HomeTitle from '@/components/HomeTitle'
// import HomeContent from '@/components/HomeContent'
export default {
  name: 'App',
  components:{
    HomeTitle,
    // HomeContent
  },
  data(){
    return{
      title:'',
      show:true,
    }
  },
 async created(){
   let {data:{title}} =  await this.$axios.get('/api/v2/movie/top250?start=0&count=20')
   this.title = title
  //  console.log(title)
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
} 
body{
  background:#222;
}

</style>

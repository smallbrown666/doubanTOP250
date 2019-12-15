<template>
    <div class="filmeslst">
        <ul>
            <!-- <li v-for="(subject,index) in subjects" :key="index">
              <img :src='"https://images.weserv.nl/?url="+subject.images.medium' alt="">
                这里的图片需要用动态绑定数据
              <p>{{subject.original_title}}</p>
                <p >
                 <span v-for="(genre,index) in subject.genres" :key="index">
                     {{genre}}
                     </span>
                </p> -->
            <!-- </li> --> 

            <!-- 实现点击图片 跳转到播放页面功能 -->
            <!-- tag="li" 让router-link 变成li标签 -->
            <router-link  :to="{name:'filmlink',params:{id:subject.id}}"  tag="li" v-for="(subject,index) in subjects" :key="index">
              <img :src='"https://images.weserv.nl/?url="+subject.images.medium' alt="">
                <!-- 这里的图片需要用动态绑定数据 -->
             <p>{{subject.original_title}}</p>
                <p >
                 <span v-for="(genre,index) in subject.genres" :key="index">
                     {{genre}}
                     </span>
                </p>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                subjects:[],
                
            }
        },
        async created(){
    let {data:{subjects}} =  await this.$axios.get('/api/v2/movie/top250?start=0&count=20')
        this.subjects = subjects
        // console.log(this.subjects[1].images.small)
  },//{data:{subjects}} 解构数组
    watch:{
        $route:{
          async  handler(){
               let {data:{subjects}} =  await this.$axios.get('/api/v2/movie/top250?count=20&&start='+this.$route.query.page *20)
                this.subjects = subjects
                //this.$route.query.page * conut  点那一页  就是那一页的page数目的index值 如 第一页page为1 那index为0 start=0 获取从start 0到count 20条的苏剧 第0条到20条数据
            }
        }
    }
}

</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
    }
    .filmeslst ul{
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
    }
    .filmeslst ul li{
        width: 22%;
        margin:10px auto;
        background: #222;
    }
    .filmeslst ul li img{
        width: 100%;
    }
    .filmeslst ul li h4{
        color:#ccc;
    }
    .filmeslst ul li p{
        color:#666;
    }
</style>
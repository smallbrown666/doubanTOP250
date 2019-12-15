<template>
    <div class="Singlefilm" v-if="film.images.medium">
        <home-title title="电影详情"></home-title>
       <img id="img" :src='"https://images.weserv.nl/?url=" + film.images.medium' alt="">
       <div class="right">
           <h2>{{film.title}}</h2>
           <p>{{film.original_title}}</p>
           <p>分类:
               <span v-for='(gern,index) in film.genres' :key="index">
                   {{gern}}/
               </span>
           </p>
           <p>主演:
               <span v-for='(cast,index) in film.casts' :key="index">
                   {{cast.name}}/
               </span>
           </p>
           <p style="...">
               喜欢：<span>{{film.wish_count}}</span>
                人气：<span>{{film.ratings_count}}</span>
           </p>
           <div class="description">
               {{film.summary}}
           </div>
           <a :href="film.share_url" target="_blank" class="play">
               立即播放
           </a>
       </div>
    </div>
</template>

<script>
import HomeTitle from '@/components/HomeTitle'
    export default { 
 
        data(){
            return {
                title:'电影详情',
                film:{
                    images:{
                         medium:''
                    }
                },
               
                
            }
        },
        components:{
            HomeTitle,
        },
       
      
        async created(){
           this.$root.$children[0].show  =  false
        let {data} =  await this.$axios.get('/api/v2/movie/subject/'+this.$route.params.id)
          this.film = data
        //   console.log(this.film)
          }
       
    }

</script>

<style scoped>
    .singlefilm{
        /* display: flex; */
        overflow: hidden;
        width: 1200px;
        margin: auto;
    }
    #img{
        /* position: absolute;
        top:50px;
        left:300px; */
        /* display: flex; */
        float: left;
        margin-left:250px;
    }
    .right{
        float:right;
        width:800px;
        color:#fff;
    }
    .right p{
        color:#ccc;
        line-height: 36px;
    }
    .description{
        height:140px;
        overflow: auto;
        color:#ccc;
    }
    .play{
        display:block;
        width:200px;
        height:50px;
        line-height: 50px;
        background-color: #009451;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
        margin-top: 20px;
    }

</style>


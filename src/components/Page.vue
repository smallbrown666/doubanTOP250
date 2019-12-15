<template>
    <div class="filmspage">
        <ul>
            <li v-for="(page,index) in maxPage" :key="index">
                <!-- 实现点击页面获取不同的数据 -->
                <!-- 点击跳转到根标签   通过查询字符串?page=index 来获取不同页面的数据 -->
                <!-- page是1-13  index是0-12-->
                <router-link :to= "{path:'/',query:{page:index}}">{{page}}</router-link>
            
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['maxPage']
    }

</script>

<style scoped>
    .filmspage ul{
        margin:20px;
        text-align: center;
    }
    .filmspage ul li{
        display: inline-block;
        width:30px;
        height:30px;
        margin:5px;
        line-height: 30px;
        background-color: #333;
        border:1px solid #666;
        text-align: center;
        color:#fff;
        cursor: pointer;
    }
    a{
            display: block;
            height: 100%;
        }
    a.router-link-exact-active{
        background:#2ad487;
    }
</style>
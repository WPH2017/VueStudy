<template>
    <div>
      <ul>
        <li v-for="item in dataList">
          <img :src="addImgHeader(item.images[0])" :alt="item.title"><br>
          <span>{{item.title}}</span>
          <!--TODO:以下这种写法会导致大量的冗余-->
          <p v-for="(v,k) in item" :key="(k==='images'||k==='title')?item.id:null">
          <template v-if="k==='images'"><img :src="addImgHeader(v[0])" alt="" v-if=""></template>
          <span v-else-if="k==='title'">{{v}}</span>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import VueAxios from 'vue-axios';

  Vue.use(VueAxios,axios);

  export default {
    data(){
      return {
        dataList:[]
      }
    },
    created(){
      this.getData();
    },
    updated(){
      console.log(1)
    },
    destroyed(a,b){
      console.log(a,b)
    },
    methods:{
      getData(){
//        通过设置代理来降低api复杂度
        // https://news-at.zhihu.com/api/4/news/latest
        this.axios.get('/api/news/latest')
          .then(res=>{
            this.dataList=res.data.stories;
          })
      },
//      TODO:解决图片保护问题
      addImgHeader(url){
        return url.replace(/http\w{0,1}:\/\/p/g,'https://images.weserv.nl/?url=p');
      }
    }
  }
</script>

<style scoped>
li{
  width: 300px;
  float: left;
}
</style>

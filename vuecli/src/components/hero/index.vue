<template>
  <div>
    <p>hero接口拉取</p>
    <ul>
      <li v-for="item in list">
        <p v-for="(v,k) in item">
          <img :src="v" alt="" v-if="k==='img'">
          <em v-else-if="k==='hero_name'">英雄： {{v}}</em>
          <span v-else>{{k}}::{{v}}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data(){
      return {
        list:[1,2]
      }
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        axios.get('/v1/db.php')
          .then(res=>{
            this.list=res.data.hero;
          });
      }
    }
  }

</script>

<style scoped>
  p{
    margin: 0;
    padding: 0;
  }
  em{
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
  }
</style>

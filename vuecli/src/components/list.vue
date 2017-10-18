<template>
  <div>
    <router-link :to="'/list/'+item.id" tag="button" :key="item.userName" v-for="item in list">{{item.userName}}</router-link>
    <p>
      <span style="{display: block}" v-for="(v,k,i) in yes">{{i}}-|:{{k}}:{{v}}<br></span>
      id:{{yes.id}},<br>
      tip:{{yes.tip}},<br>
      userName:{{yes.userName}},<br>
      hobby:{{yes.hobby}}<br>
    </p>
  </div>
</template>

<script>
  let data=[
    {
      id:1,
      tip:'vip',
      userName:'abc嗯',
      hobby:'swimming'
    },
    {
      id:2,
      tip:'common',
      userName:'b13不好',
      hobby:'coding'
    },
    {
      id:3,
      tip:'vip',
      userName:'c好吧',
      hobby:'loving'
    },
  ];
  export default {
    data(){
      return{
        list:data,
        yes:''
      }
    },
    watch:{
      $route(){
        this.getData();
      }
    },
    created(){
      this.getData();
    },
    methods:{
      getData(){
        this.yes=this.list.filter((item)=>{
          return item.id===1*this.$route.params.userId;
        })[0];
      }
    }
  }
</script>

<style scoped>
  div{
    position: absolute;
    width: 100%;
  }

</style>

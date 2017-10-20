<template>
  <div id="app">
    <img src="./assets/logo.png" @click.alt="count++" @click.ctrl="count--">
    <h1>{{ count + num }}</h1>
    <a href="#/">首页</a>
    <a href="#/test">切换了</a>
    <ul>
      <router-link :to="{name:'Hello'}" exact tag="li" event="mouseenter" append replace active-class="active">这是首页</router-link>
      <router-link to="/test" exact tag="li" event="mouseenter" active-class="active">这是切换的</router-link>
      <router-link to="/test/yes/profile" tag="li" event="mouseenter" active-class="active">这是测试</router-link>
      <router-link to="/list" tag="li" event="mouseenter" active-class="active">这是测试</router-link>
      <router-link to="/hero" tag="li" event="mouseenter" active-class="active">农药英雄</router-link>
      <router-link to="/daliy" tag="li" event="mouseenter" active-class="active">知乎日报</router-link>
      <router-link to="/vuex" tag="li" event="mouseenter" active-class="active">vuex</router-link>
    </ul>
    <p>当前路径在{{$route.params.yes}}</p>
    <div id="container">
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      count: 1
    }
  },
  computed:{
    num(){
      return this.$store.state.num;
    }
  },
  watch:{
    count(n,o){
      if(n>o){
        this.$store.commit('increment');
      }else{
        this.$store.commit('less');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
.router-link-active{
  color: #f00;
}
.active{
  color: #f00;
}
.router-link-exact-active{
  background: #00f;
}
.wph{
  background: #0f0;
}
ul,li{
  display: inline-block;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
#container{
  position: relative;
}
</style>

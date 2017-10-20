<template>
  <div>
    <p>{{num}}</p>
    <p>{{yes}}</p>
    <input type="button" @click="minus" value="-">
    <input type="button" @click="plus" value="+">
    <p>mapMutations1</p>
    <input type="button" @click="less" value="-">
    <input type="button" @click="increment" value="+">
    <p>mapMutations2</p>
    <input type="button" @click="minu" value="-">
    <input type="button" @click="add" value="+">
    <p>actions</p>
    <input type="button" @click="minPatch" value="-">
    <input type="button" @click="addPatch" value="+">
    <input type="button" @click="minThenAddPatch" value="'-' => '+'">
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';

export default {
  computed:{
    num(){
      return this.$store.state.num;
    },
    ...mapState(['yes'])
  },
  methods:{
    minus(){
      this.$store.commit('less');
    },
    plus(){
      this.$store.commit('increment');
    },
//    同名方式
    ...mapMutations([
      'increment',
      'less'
    ]),
//    分别指定
    ...mapMutations({
      add:'increment',
      minu: 'less'
    }),
    minPatch(){
      this.$store.dispatch('less');
    },
    addPatch(){
      this.$store.dispatch('increment');
    },
    minThenAddPatch(){
      this.$store.dispatch('less2Increment').then(()=>{console.log(2); this.$store.commit('increment')});
    }
  }
}
</script>

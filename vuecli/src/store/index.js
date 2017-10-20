import vue from 'vue';
import vuex from 'vuex';

vue.use(vuex);

let store=new vuex.Store({
  state:{
    num:100,
    yes:1
  },
  mutations:{
    increment(state,payload){
      state.num++;
    },
    less(state,payload){
      state.num--;
    }
  },
  actions:{
    increment({commit}){
      setTimeout(()=>{commit('increment')},1000);
    },
    less({commit}){
      setTimeout(()=>{commit('less')},1000);
    },
    'less2Increment'(context){
      console.log(context)
      let commit=context.commit;
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          commit('less');
          resolve();
        },1000);
      })
      //   .then(()=>{
      //   new Promise((resolve,reject)=>{
      //     setTimeout(()=>{
      //       commit('increment');
      //       resolve();
      //     },1000)
      //   });
      // });
    }
  }
});

export default store;

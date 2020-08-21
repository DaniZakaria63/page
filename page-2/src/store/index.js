import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    BASE_URL:"https://reqres.in/api",
    auth:{
      userData:null,
      status:false
    }
  },
  getters:{
    getAuthData:state=> state.auth,
    getBaseURL:state=>state.BASE_URL
  },
  mutations: {
    ['AUTH_SUCCESS']:(state,{token,status})=>{
      state.auth.userData=token;
      state.auth.status=status
    },
    ['LOGOUT']:(state)=>{
      state.auth.userData=null;
      state.auth.status=false;
    }
  },
  actions: {
    ['AUTH_RESPONSE']:({commit},token)=>{
      console.log("BERHASIL LOGIN");
      commit('AUTH_SUCCESS',{token,status:true})
    },
    ['LOGOUT']:({commit})=>{
      console.log("Berhasil Logout");
      commit('LOGOUT');
    }
  },
  modules: {}
});

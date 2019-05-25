import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    interviews: [
      {acf: {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''}},
      {acf: {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''}},
      {acf: {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''}},
    ]
  },
  mutations: {
    SET_INTERVIEWS(state, interviews){
      state.interviews = interviews;
    },
  },
  actions: {
    loadData({commit}){
      axios.get("http://wpheadlessv1.test/wp-json/acf/v3/interviews")
        .then((response)  =>  {
          //console.log(JSON.stringify(response.data));
          let interviews = response.data;
          commit('SET_INTERVIEWS', interviews);
        }, (error)  =>  {
          this.loading = false;
        })
    }
  }
})

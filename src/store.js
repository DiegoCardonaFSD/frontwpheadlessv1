import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    interviews: [
      {acf: {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''}},
    ],
    candidates: [
      {acf:{name:'',lastname:'', phonenumer:'', position: ''}}
    ],
    interviewers: [
      {acf:{name:'',lastname:'', phonenumer:'', technologies_evaluated: ''}}
    ],

  },
  mutations: {
    SET_INTERVIEWS(state, interviews){
      state.interviews = interviews;
    },
    SET_CANDIDATES(state, candidates){
      state.candidates = candidates;
    },
    SET_INTERVIEWERS(state, interviewers){
      state.interviewers = interviewers;
    },
  },
  actions: {
    loadData({commit, dispatch}){
      dispatch('getInterviews');
      dispatch('getCandidates');
      dispatch('getInterviewers');
    },
    getInterviews({commit}){
      axios.get("http://wpheadlessv1.test/wp-json/acf/v3/interviews")
        .then((response)  =>  {
          //console.log(JSON.stringify(response.data));
          let interviews = response.data;
          commit('SET_INTERVIEWS', interviews);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    getCandidates({commit}){
      axios.get("http://wpheadlessv1.test/wp-json/acf/v3/candidates")
        .then((response)  =>  {
          //console.log(JSON.stringify(response.data));
          let candidates = response.data;
          commit('SET_CANDIDATES', candidates);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    getInterviewers({commit}){
      axios.get("http://wpheadlessv1.test/wp-json/acf/v3/interviewers")
        .then((response)  =>  {
          //console.log(JSON.stringify(response.data));
          let interviewers = response.data;
          commit('SET_INTERVIEWERS', interviewers);
        }, (error)  =>  {
          this.loading = false;
        })
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    interviews: [],
    interview: {acf: {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''}},
    interview_id: 0,
    candidates: [],
    interviewers: [],

  },
  mutations: {
    SET_INTERVIEWS(state, interviews){
      state.interviews = interviews;
    },
    SET_INTERVIEW(state, id){
      // state.interview = interview;
      console.log('SET_INTERVIEW '+ id);
      state.interview_id = id;
      state.interviews.forEach(element => {
        if(element.id == id){
          state.interview = element;
        }
      });
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
          if(this.state.interview_id != 0){
            commit('SET_INTERVIEW', this.state.interview_id);
          }
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
    },
    getInterview({commit}, id){
      
    }
  }
})

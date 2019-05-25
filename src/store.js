import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios);

let domain = "http://wpheadlessv1.test";

export default new Vuex.Store({
  state: {
    interviews: [],
    interview: {acf: {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''}},
    interview_id: 0,
    candidates: [],
    candidate: {acf: {name: '', lastname: '', email: '', phonenumber: '', position: ''}},
    candidate_id: 0,
    interviewers: [],
    interviewer: {acf: {name: '', lastname: '', email: '', phonenumber: '', technologies_evaluated: ''}},
    interviewer_id: 0,

  },
  mutations: {
    SET_INTERVIEWS(state, interviews){
      state.interviews = interviews;
    },
    SET_INTERVIEW(state, id){
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
    SET_CANDIDATE(state, id){
      state.candidate_id = id;
      state.candidates.forEach(element => {
        if(element.id == id){
          state.candidate = element;
        }
      });
    },
    SET_INTERVIEWERS(state, interviewers){
      state.interviewers = interviewers;
    },
    SET_INTERVIEWER(state, id){
      state.interviewer_id = id;
      state.interviewers.forEach(element => {
        if(element.id == id){
          state.interviewer = element;
        }
      });
    },
  },
  actions: {
    loadData({commit, dispatch}){
      dispatch('getInterviews');
      dispatch('getCandidates');
      dispatch('getInterviewers');
    },
    getInterviews({commit}){
      axios.get(domain+"/wp-json/acf/v3/interviews")
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
      axios.get(domain+"/wp-json/acf/v3/candidates")
        .then((response)  =>  {
          //console.log(JSON.stringify(response.data));
          let candidates = response.data;
          commit('SET_CANDIDATES', candidates);
          if(this.state.candidate_id != 0){
            commit('SET_CANDIDATE', this.state.candidate_id);
          }
        }, (error)  =>  {
          this.loading = false;
        })
    },
    getInterviewers({commit}){
      axios.get(domain+"/wp-json/acf/v3/interviewers")
        .then((response)  =>  {
          //console.log(JSON.stringify(response.data));
          let interviewers = response.data;
          commit('SET_INTERVIEWERS', interviewers);
          if(this.state.interviewer_id != 0){
            commit('SET_INTERVIEWER', this.state.interviewer_id);
          }
        }, (error)  =>  {
          this.loading = false;
        })
    },
    ////DELETES
    deleteInterview({commit, dispatch}, id){
      axios.delete(domain+"/wp-json/acf/v3/interviews/"+id)
        .then((response)  =>  {
          dispatch('loadData');
        }, (error)  =>  {
          this.loading = false;
        })
    }
  }
})

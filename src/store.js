import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios);

// let domain = "http://wpheadlessv1.test";
let domain = "http://wpheadlessv1.thedeveloper.co";

export default new Vuex.Store({
  state: {
    header: '',
    interviews: [],
    interview: {id:'',acf: {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''}},
    interview_id: 0,
    candidates: [],
    candidate: {id:'',acf: {name: '', lastname: '', email: '', phonenumber: '', position: ''}},
    candidate_id: 0,
    interviewers: [],
    interviewer: {id:'',acf: {name: '', lastname: '', email: '', phonenumber: '', technologies_evaluated: ''}},
    interviewer_id: 0,
    saveCb: false,
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
      if(id == 0){
        state.interview = {id:'',acf: {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''}};
      }
    },
    GET_INTERVIEW(state, id){
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
      if(id == 0){
        state.candidate = {id:'',acf: {name: '', lastname: '', email: '', phonenumber: '', position: ''}};
      }
    },
    GET_CANDIDATE(state, id){
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
      if(id == 0){
        state.interviewer = {id:'',acf: {name: '', lastname: '', email: '', phonenumber: '', technologies_evaluated: ''}};
      }
    },
    GET_INTERVIEWER(state, id){
      state.interviewers.forEach(element => {
        if(element.id == id){
          state.interviewer = element;
        }
      });
    },
    SET_SAVECB(state, cb){
      state.saveCb = cb;
    },
  },
  actions: {
    loadData({commit, dispatch}){
      console.log(process.env.VUE_APP_USER);
      dispatch('login');
      dispatch('getInterviews');
      dispatch('getCandidates');
      dispatch('getInterviewers');
    },
    login({commit}){
      let user = 'wphladmin';
      let pass = 'JGjcW5lthTQdbGLo1';
      const data = {};
      data['username'] = user;
      data['password'] = pass;
      axios.post(domain+"/wp-json/jwt-auth/v1/token", data)
        .then((response)  =>  {
          //console.log(JSON.stringify(response.data));
          let token = response.data.token;
          const header = { headers: { Authorization: "Bearer " + token }};
          this.state.header = header;
          //console.log(token);
        }, (error)  =>  {
          console.log(JSON.stringify(error));
        })
      
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
    ////CREATES
    createInterview({commit, dispatch}, data){
      var form_data = new FormData();
      form_data.append('title', 'interview');
      form_data.append('status', 'publish');
      //axios.post(domain+"test/v1/post", _data, this.state.header)
      axios.post(domain + "/wp-json/wp/v2/interviews", form_data, this.state.header)
        .then((response)  =>  {
          //console.log(response.data);
          data.id = response.data.id;
          dispatch('createInterview2', data);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    createInterview2({commit, dispatch}, data){
      data.candidate = data.candidate_id;
      data.interviewer = data.interviewer_id;
      axios.post(domain + "/wp-json/interview/add", data, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
          commit('SET_SAVECB', true);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    updateInterview({commit, dispatch}, data){
      data.candidate = data.candidate_id;
      data.interviewer = data.interviewer_id;
      axios.post(domain + "/wp-json/interview/update", data, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
          commit('SET_SAVECB', true);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    createInterviewer({commit, dispatch}, data){
      var form_data = new FormData();
      form_data.append('title', data.name+' '+data.lastname);
      form_data.append('status', 'publish');
      //axios.post(domain+"test/v1/post", _data, this.state.header)
      axios.post(domain + "/wp-json/wp/v2/interviewers", form_data, this.state.header)
        .then((response)  =>  {
          //console.log(response.data);
          data.id = response.data.id;
          dispatch('createInterviewer2', data);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    createInterviewer2({commit, dispatch}, data){
      axios.post(domain + "/wp-json/interviewer/add", data, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
          commit('SET_SAVECB', true);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    updateInterviewer({commit, dispatch}, data){
      axios.post(domain + "/wp-json/interviewer/update", data, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
          commit('SET_SAVECB', true);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    createCandidate({commit, dispatch}, data){
      var form_data = new FormData();
      form_data.append('title', data.name+' '+data.lastname);
      form_data.append('status', 'publish');
      //axios.post(domain+"test/v1/post", _data, this.state.header)
      axios.post(domain + "/wp-json/wp/v2/candidates", form_data, this.state.header)
        .then((response)  =>  {
          //console.log(response.data);
          data.id = response.data.id;
          dispatch('createInterviewer2', data);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    createCandidate2({commit, dispatch}, data){
      axios.post(domain + "/wp-json/candidate/add", data, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
          commit('SET_SAVECB', true);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    updateCandidate({commit, dispatch}, data){
      axios.post(domain + "/wp-json/candidate/update", data, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
          commit('SET_SAVECB', true);
        }, (error)  =>  {
          this.loading = false;
        })
    },
    ////DELETES
    deleteInterview({commit, dispatch}, id){
      axios.delete(domain+"/wp-json/acf/v3/interviews/"+id, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
        }, (error)  =>  {
          this.loading = false;
        })
    },
    deleteInterviewer({commit, dispatch}, id){
      axios.delete(domain+"/wp-json/acf/v3/interviewers/"+id, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
        }, (error)  =>  {
          this.loading = false;
        })
    },
    deleteCandidate({commit, dispatch}, id){
      axios.delete(domain+"/wp-json/acf/v3/candidates/"+id, this.state.header)
        .then((response)  =>  {
          dispatch('loadData');
        }, (error)  =>  {
          this.loading = false;
        })
    }

  }
})

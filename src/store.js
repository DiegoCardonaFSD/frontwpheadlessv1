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

  },
  actions: {

  }
})

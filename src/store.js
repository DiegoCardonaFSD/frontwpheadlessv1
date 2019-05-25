import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

export default new Vuex.Store({
  state: {
    interviews: [
      {interviewer: {id:''}, candidate: {id: ''}, date: '', meetinglink: '',rate: '', status: ''},
    ]
  },
  mutations: {

  },
  actions: {

  }
})

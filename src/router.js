import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( './views/Home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/interviews',
      name: 'interviews',
      component: () => import('./views/Interviews.vue')
    },
    {
      path: '/interview/:id',
      name: 'interview',
      component: () => import('./views/Interview.vue')
    },
    {
      path: '/candidates',
      name: 'candidates',
      component: () => import('./views/Candidates.vue')
    },
    {
      path: '/candidate/:id',
      name: 'candidate',
      component: () => import('./views/Candidate.vue')
    },
    {
      path: '/interviewers',
      name: 'interviewers',
      component: () => import('./views/Interviewers.vue')
    },
    {
      path: '/interviewer/:id',
      name: 'interviewer',
      component: () => import('./views/Interviewer.vue')
    }

  ]
})

<template>
  <div class="home">
    <Header/>
    <main role="main" class="container">
      <Nav/>
      <InterviewersList/>
      </main>
  </div>
</template>

<script>
import InterviewersList from '@/components/InterviewersList.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Interviewers',
    components: {
      Header,
      InterviewersList,
      Nav,
    }   
}
</script>
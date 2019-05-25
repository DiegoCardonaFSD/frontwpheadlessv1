<template>
  <div class="home">
    <Header/>
    <main role="main" class="container">
      <Nav/>
      <InterviewersList/>
    </main>
    <InterviewerModal/>
  </div>
</template>

<script>
import InterviewersList from '@/components/InterviewersList.vue'
import InterviewerModal from '@/components/InterviewerModal.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Interviewer',
    components: {
      Header,
      InterviewersList,
      Nav,
      InterviewerModal,
    }   
}
</script>
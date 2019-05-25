<template>
  <div class="home">
    <Header/>
    <main role="main" class="container">
      <Nav/>
      <InterviewsList/>
    </main>
    <InterviewModal/>
  </div>
</template>

<script>
import InterviewsList from '@/components/InterviewsList.vue'
import InterviewModal from '@/components/InterviewModal.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Interview',
    components: {
      Header,
      InterviewsList,
      Nav,
      InterviewModal,
    }   
}
</script>
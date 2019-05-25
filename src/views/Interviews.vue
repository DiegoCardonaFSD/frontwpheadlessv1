<template>
  <div class="home">
    <Header/>
    <main role="main" class="container">
      <Nav/>
      <InterviewsList/>
      </main>
  </div>
</template>

<script>
import InterviewsList from '@/components/InterviewsList.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Interviews',
    components: {
      Header,
      InterviewsList,
      Nav,
    }   
}
</script>
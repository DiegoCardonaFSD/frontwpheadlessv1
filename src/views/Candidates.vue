<template>
  <div class="home">
    <Header/>
    <main role="main" class="container">
      <Nav/>
      <CandidatesList/>
      </main>
  </div>
</template>

<script>
import CandidatesList from '@/components/CandidatesList.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Interviews',
    components: {
      Header,
      CandidatesList,
      Nav,
    }   
}
</script>
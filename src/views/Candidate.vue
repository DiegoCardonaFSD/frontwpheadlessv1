<template>
  <div class="home">
    <Header/>
    <main role="main" class="container">
      <Nav/>
      <CandidatesList/>
    </main>
    <CandidateModal/>
  </div>
</template>

<script>
import CandidatesList from '@/components/CandidatesList.vue'
import CandidateModal from '@/components/CandidateModal.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Candidate',
    components: {
      Header,
      CandidatesList,
      Nav,
      CandidateModal,
    }   
}
</script>
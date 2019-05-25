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
// @ is an alias to /src
import InterviewsList from '@/components/InterviewsList.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header,
    InterviewsList,
    Nav,
  }
}
</script>

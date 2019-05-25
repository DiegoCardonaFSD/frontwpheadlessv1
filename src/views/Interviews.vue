<template>
  <div class="home">
    <Header/>
    <main role="main" class="container">
      <Nav/>
      <ListInterviews/>
      </main>
  </div>
</template>

<script>
import ListInterviews from '@/components/ListInterviews.vue'
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'

export default {
    name: 'Interviews',
    components: {
      Header,
      ListInterviews,
      Nav,
    }   
}
</script>
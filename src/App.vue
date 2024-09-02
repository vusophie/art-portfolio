<script setup>
import NavBar from './components/NavBar.vue'
import ContactBar from './components/ContactBar.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <NavBar />
      <ContactBar />      
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 120vh;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

<script setup>
import NavBar from './components/NavBar.vue'
import ContactBar from './components/ContactBar.vue'
</script>

<template>
  <div class="container">
    <NavBar />
    <!-- <ContactBar /> -->
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Hammersmith+One&family=Supermercado+One&display=swap');
html, body {
  min-height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../public/images/background.jpg');
  background-size: cover;
  background-repeat: no-repeat; /* Prevents the image from repeating */
  background-position: center;
  /* filter: saturate(0.5); */
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin-bottom: 5em;
}

.NavBar {
  position: relative;
  z-index: 1;
}

.ContactBar {
  position: relative;
  z-index: 1;
}

</style>

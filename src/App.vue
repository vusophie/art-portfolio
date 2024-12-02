<script setup>
import NavBar from './components/NavBar.vue'
import ContactBar from './components/ContactBar.vue'
</script>

<template>
    <NavBar />
    <ContactBar />
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: center;
}


.NavBar, .ContactBar {
  position: relative;
  z-index: 1;
}

</style>

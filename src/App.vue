<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="container">
    <NavBar />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Overpass:ital,wght@0,900;1,900&display=swap');
html, body {
  min-height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f7f3;
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
</style>

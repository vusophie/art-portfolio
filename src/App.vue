<script setup>
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="background">
    <div class="container">
      <NavBar />
    </div>
  </div>
  
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&family=Overpass:ital,wght@0,900;1,900&display=swap');
/* Base styles for HTML and body */
html {
  height: 100vh; /* Full viewport height */
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f7f3;
  overflow: hidden; /* Prevent vertical scrolling */
  scrollbar-width: none;
}


@font-face {
  font-family: 'Basteleur';
  src: url('../../public/Basteleur-Bold.otf') format('opentype');
  font-weight: normal; 
  font-style: normal; 
}

/* Background container */
.background {
  display: flex;
  justify-content: center; /* Horizontally center content */
  align-items: center;
  justify-items: center;
  align-content: center;
  width: 100vw;
  height: 100%;
  background-color: #f35f71;
}

/* Main container styling */
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Horizontally center items */
  justify-items: center;
  width: 85vw; /* Width of the container */
  height: auto; /* Full height of the parent */
  box-sizing: border-box; /* Include padding and border in dimensions */
  background-color: #f9f7f3;
  padding-top: 1em; /* Add padding if needed for spacing */
}


</style>

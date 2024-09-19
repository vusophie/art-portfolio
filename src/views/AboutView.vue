<template>
  <CContainer fluid class="about">
    <CContainer sm class="left">
      Content here
    </CContainer>
    <CContainer lg class="right">
      Content here
    </CContainer>
  </CContainer>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  justify-content: space-between; /* Push inner containers to opposite sides */
  align-items: center;
  background-color: red;
}

CContainer {
  background-color: blue;
  padding: 20px; /* Optional for spacing */
  height: 100vh;
}

.right {
  flex-basis: 30%; /* 35% width for the first container */
}

.left {
  flex-basis: 60%; /* 65% width for the second container */
}
</style>

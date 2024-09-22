<template>
  <CContainer fluid class="contact">
    <CContainer lg class="left">
      <h1>This is a contact page</h1>
    </CContainer>
    <CContainer lg class="right">
      <p class="title"><strong>Sophie Illustration</strong></p>
      <p class="contact"><strong>CONTACT</strong></p>
      <p><a href="https://www.linkedin.com/in/vu-sophie/" target="_blank">LinkedIn</a></p>
      <p><a href="https://www.instagram.com/soupvu" target="_blank">Instagram</a></p>
    </CContainer>
  </CContainer>
</template>

<style>
.contact {
  margin-top: 20vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* Light grey background */
  padding: 20px;
}

.left {
  flex-basis: 60%;
  background-color: #fff; /* Whit  e background for content container */
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-align: center;
}

.right {
  flex-basis: 30%;
  background-color: #fff; /* Whit  e background for content container */
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-align: center;
}

.contact {
  font-size: 20px;
  margin-bottom: 20px;
}
</style>

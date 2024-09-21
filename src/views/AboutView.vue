<template>
  <CContainer fluid class="about">
    <CContainer sm class="left">
      ABOUT ME INFO
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
.about {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: left;
  background-color: #f5f5f5; /* Light grey background */
  padding: 20px;
  text-align: left;
}

CContainer {
  padding: 20px;
}

.left {
  flex-basis: 60%;
  background-color: #fff; /* White background for left container */
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
}

.right {
  flex-basis: 30%;
  background-color: #fff; /* White background for right container */
  padding: 40px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  text-align: center;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.contact {
  font-size: 20px;
  margin-bottom: 20px;
}

a {
  color: #007bff; /* Link color */
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>

<template>
  <CContainer fluid class="about">
    <CContainer fluid sm class="left">
      <h3>SOPHIE / Visual artist</h3>
      <div>
        <p>
          Hey! I’m Sophie, and I love creating art in my spare time. 
          I mainly draw characters in a cartoon style. 
          While I primarily work with traditional art, I’m also exploring digital art and animation.
        </p>
      </div>
      
      <hr>

      <div>
        <h3>Tools</h3>

        <p>
          I use colored crayons for my paper drawings.
          For my digital work, I’m using Procreate.
        </p>
      </div>

      <!-- <div>
        <h3>Character Designs</h3>
        <div>
          // FOR NAMES IN ILLUSTRATIONS 
        </div>

        <h3>Abstract Illustrations</h3>
        <div>
          // FOR NAMES IN ILLUSTRATIONS 
        </div>

        <h3>Other Illustrations</h3>
        <div>
          // FOR NAMES IN ILLUSTRATIONS 
        </div>

        <h3>Animations</h3>
        <div>
          // FOR NAMES IN ILLUSTRATIONS 
        </div>
      </div> -->
    </CContainer>
    <CContainer fluid lg class="right">
      <p class="contact-title"><strong>Sophie Illustrations</strong></p>
      <p><small><strong>CONTACT</strong></small></p>
      <p><small><a href="https://www.linkedin.com/in/vu-sophie/" target="_blank">www.linkedin.com/in/vu-sophie/</a></small></p>
      <p><small><a href="https://www.instagram.com/soupvu" target="_blank">www.instagram.com/soupvu</a></small></p>
      <p><small><a href="mailto:sottvu@gmail.com">sottvu@gmail.com</a></small></p>
    </CContainer>
  </CContainer>
</template>

<style>
.about {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: left;
  margin: 60vh 0vw 5vw 10vw;

  text-align: left;
}

.left {
  flex-basis: 60%;
}

.left div, hr {
  margin-bottom: 40px;
}

.right {
  flex-basis: 30%;
  padding: 40px;
}

.right a {
  color: black !important;
  text-decoration: none;
}

.contact-title {
  margin-top: 1.5em;
  margin-bottom: 1em;
}

p {
  margin: 0;
  line-height: 2;
}

h3 { 
  color: rgba(0, 59, 222, 1) !important;
}
</style>

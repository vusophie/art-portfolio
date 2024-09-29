<template>
  <CContainer fluid class="about">
    <CContainer fluid sm class="left">
      <h3>SOPHIE / Visual artist</h3>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Proin vehicula ornare elit, in vestibulum neque dignissim nec. 
          Praesent tincidunt imperdiet neque sit amet porttitor. 
          Curabitur auctor facilisis est nec accumsan. Praesent consectetur 
          sem nisi, in tincidunt enim venenatis varius. Aenean vel dictum 
          nibh, vitae rutrum est. In cursus ac lectus at auctor. Nunc 
          sollicitudin diam iaculis arcu convallis, rutrum gravida 
          purus pulvinar. In facilisis facilisis euismod.
        </p>
      </div>
      
      <hr>

      <div>
        <h3>Tools</h3>

        <p>
          Pellentesque vitae maximus magna, non laoreet leo. 
          Morbi erat sapien, pharetra in massa eu, laoreet hendrerit 
          enim. Curabitur suscipit molestie malesuada. Nam at nunc dui. 
          Nunc sed ultricies lacus. Nulla id aliquet dolor, molestie 
          sagittis nisi. In vel turpis a dui tincidunt vulputate ut sit 
          amet metus. Etiam tempor urna justo, ut vehicula risus placerat 
          id. Ut vel neque at dui maximus placerat. Sed molestie porttitor 
          dolor, porttitor dapibus mauris bibendum ac. Pellentesque vitae 
          luctus dolor. Pellentesque hendrerit, diam imperdiet cursus congue, 
          felis nulla hendrerit odio, vitae fermentum risus massa posuere mi. 
          Sed dapibus consequat libero, vel sodales lacus ornare non. Nulla 
          eleifend nulla sit amet aliquam placerat.
        </p>
      </div>

      <div>
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
      </div>
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

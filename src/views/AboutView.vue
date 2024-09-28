<template>
  <CContainer fluid class="about">
    <CContainer fluid sm class="left">
      <h3>{{aboutPage.title}}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Proin vehicula ornare elit, in vestibulum neque dignissim nec. 
        Praesent tincidunt imperdiet neque sit amet porttitor. 
        Curabitur auctor facilisis est nec accumsan. Praesent consectetur 
        sem nisi, in tincidunt enim venenatis varius. Aenean vel dictum 
        nibh, vitae rutrum est. In cursus ac lectus at auctor. Nunc 
        sollicitudin diam iaculis arcu convallis, rutrum gravida 
        purus pulvinar. In facilisis facilisis euismod.

        <hr>

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

      <hr/>

      <p>
      <strong>Character Designs</strong>
      <div>
        // FOR NAMES IN ILLUSTRATIONS 
      </div>

      <strong>Abstract Illustrations</strong>
      <div>
        // FOR NAMES IN ILLUSTRATIONS 
      </div>

      <strong>Other Illustrations</strong>
      <div>
        // FOR NAMES IN ILLUSTRATIONS 
      </div>

      <strong>Animations</strong>
      <div>
        // FOR NAMES IN ILLUSTRATIONS 
      </div>

      <strong>Videos</strong>
      <div>
        // FOR NAMES IN ILLUSTRATIONS 
      </div>
      </p>

    </CContainer>
    <CContainer fluid lg class="right">
      <p class="contact-title"><strong>Sophie Illustrations</strong></p>
      <p><small><strong>CONTACT</strong></small></p>
      <p><small><a href="https://www.linkedin.com/in/vu-sophie/" target="_blank">LinkedIn</a></small></p>
      <p><small><a href="https://www.instagram.com/soupvu" target="_blank">Instagram</a></small></p>
    </CContainer>
  </CContainer>
</template>

<style>
.about {
  margin-top: 21vh;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: left;
  padding: 20px;
  margin-top: 60vh;
  text-align: left;
}

.left {
  flex-basis: 60%;
  padding: 40px;
}

.right {
  flex-basis: 30%;
  padding: 40px;
}

.contact-title {
  margin-top: 1.5em;
  margin-bottom: 1em;
}

p {
  margin: 0;
}
</style>
